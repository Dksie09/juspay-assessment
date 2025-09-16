"use client";

import { useEffect, useCallback, useRef } from 'react';

export const KEYBOARD_SHORTCUTS = {
  SEARCH_FOCUS: ['cmd+/', 'ctrl+/'],
  ARROW_UP: ['ArrowUp'],
  ARROW_DOWN: ['ArrowDown'],
  ARROW_LEFT: ['ArrowLeft'],
  ARROW_RIGHT: ['ArrowRight'],
  ENTER: ['Enter'],
  ESCAPE: ['Escape'],
  TAB: ['Tab'],
  SHIFT_TAB: ['shift+Tab']
};

export function useKeyboardShortcuts(shortcuts = {}) {
  const handleKeyDown = useCallback((event) => {
    const { key, metaKey, ctrlKey, shiftKey, altKey } = event;
    
    // Create a key combination string
    const modifiers = [];
    if (metaKey) modifiers.push('cmd');
    if (ctrlKey) modifiers.push('ctrl');
    if (shiftKey) modifiers.push('shift');
    if (altKey) modifiers.push('alt');
    
    const keyCombo = modifiers.length > 0 
      ? `${modifiers.join('+')}+${key.toLowerCase()}`
      : key;

    // Check if any shortcut matches the pressed key combination
    Object.entries(shortcuts).forEach(([action, callback]) => {
      const shortcutKeys = KEYBOARD_SHORTCUTS[action] || [];
      if (shortcutKeys.includes(keyCombo) || shortcutKeys.includes(key)) {
        event.preventDefault();
        callback(event);
      }
    });
  }, [shortcuts]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
}

export function useTableNavigation({
  rowCount = 0,
  onRowSelect,
  onRowActivate,
  enabled = true,
  initialSelectedRow = -1
}) {
  const selectedRowRef = useRef(initialSelectedRow);
  const tableContainerRef = useRef(null);
  const lastInteractionInsideRef = useRef(false);

  const isActive = useCallback(() => {
    const container = tableContainerRef.current;
    if (!container) return false;
    const hasFocusInside = container.contains(document.activeElement);
    return hasFocusInside || lastInteractionInsideRef.current;
  }, []);

  const scrollToRow = useCallback((rowIndex) => {
    if (!tableContainerRef.current) return;
    
    const row = tableContainerRef.current.querySelector(`[data-row-index="${rowIndex}"]`);
    if (row) {
      row.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest' 
      });
    }
  }, []);

  const clearKeyboardSelection = useCallback(() => {
    if (!tableContainerRef.current) return;
    const rows = tableContainerRef.current.querySelectorAll('[data-row-index]');
    rows.forEach((row) => row.removeAttribute('data-keyboard-selected'));
    selectedRowRef.current = -1;
    lastInteractionInsideRef.current = false;
  }, []);

  const selectRow = useCallback((rowIndex) => {
    if (rowIndex < 0 || rowIndex >= rowCount) return;
    
    selectedRowRef.current = rowIndex;
    onRowSelect?.(rowIndex);
    scrollToRow(rowIndex);
    
    // Add visual focus
    const rows = tableContainerRef.current?.querySelectorAll('[data-row-index]');
    rows?.forEach((row, index) => {
      if (index === rowIndex) {
        row.setAttribute('data-keyboard-selected', 'true');
        row.focus();
      } else {
        row.removeAttribute('data-keyboard-selected');
      }
    });
  }, [rowCount, onRowSelect, scrollToRow]);

  // Manage active area and clearing
  useEffect(() => {
    if (!enabled) return;

    const container = tableContainerRef.current;

    const handlePointerDown = (e) => {
      const c = tableContainerRef.current;
      if (!c) return;
      const inside = c.contains(e.target);
      lastInteractionInsideRef.current = inside;
      if (!inside) {
        clearKeyboardSelection();
      }
    };

    const handleFocusIn = (e) => {
      const c = tableContainerRef.current;
      if (!c) return;
      const inside = c.contains(e.target);
      lastInteractionInsideRef.current = inside;
      if (!inside) {
        clearKeyboardSelection();
      }
    };

    document.addEventListener('pointerdown', handlePointerDown, true);
    document.addEventListener('focusin', handleFocusIn);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown, true);
      document.removeEventListener('focusin', handleFocusIn);
    };
  }, [enabled, clearKeyboardSelection]);

  const guard = (fn) => (e) => {
    if (!isActive()) return;
    fn?.(e);
  };

  const shortcuts = enabled ? {
    ARROW_UP: guard(() => {
      const newIndex = Math.max(0, selectedRowRef.current - 1);
      selectRow(newIndex);
    }),
    ARROW_DOWN: guard(() => {
      const newIndex = Math.min(rowCount - 1, selectedRowRef.current + 1);
      selectRow(newIndex);
    }),
    ENTER: guard(() => {
      if (selectedRowRef.current >= 0) {
        onRowActivate?.(selectedRowRef.current);
      }
    }),
    ESCAPE: guard(() => {
      clearKeyboardSelection();
    })
  } : {};

  useKeyboardShortcuts(shortcuts);

  return {
    selectedRow: selectedRowRef.current,
    selectRow,
    tableContainerRef
  };
}

export function useSearchShortcut(searchInputRef) {
  const shortcuts = {
    SEARCH_FOCUS: () => {
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    },
    ESCAPE: () => {
      if (document.activeElement === searchInputRef.current) {
        searchInputRef.current?.blur();
      }
    }
  };

  useKeyboardShortcuts(shortcuts);
}