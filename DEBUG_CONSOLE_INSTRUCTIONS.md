# Browser Console Debugging Instructions

## Step 1: Open Browser DevTools

1. Open http://localhost:5174/ in your browser
2. Press **F12** or **Ctrl+Shift+I** (Linux) / **Cmd+Option+I** (Mac)
3. Click on the **Console** tab

## Step 2: Test Navigation

Click each navigation button in the sidebar and watch the console:

### Expected Console Output

When you click **Revenue**:
```
[Navigation] Clicked: revenue
[Navigation] Current activeNav: dashboard
[Navigation] Called setActiveNav with: revenue
[App] Rendering with activeNav: revenue
[App] renderContent called, activeNav: revenue
[App] Rendering RevenueDashboard
```

When you click **Cash Flow**:
```
[Navigation] Clicked: cashflow
[Navigation] Current activeNav: revenue
[Navigation] Called setActiveNav with: cashflow
[App] Rendering with activeNav: cashflow
[App] renderContent called, activeNav: cashflow
[App] Rendering CashFlowDashboard
```

## Step 3: Check for Errors

Look for:
- ❌ **Red error messages** - These indicate JavaScript errors
- ⚠️ **Yellow warnings** - These might indicate issues
- 🔵 **Blue info logs** - These are our debug messages

## Common Issues & Solutions

### Issue 1: Nothing happens when clicking
**Symptom:** No console logs appear when clicking buttons

**Possible causes:**
- Buttons are blocked by another element (z-index issue)
- JavaScript not loading
- Event handlers not attached

**Solution:**
```javascript
// Run in browser console to check if buttons exist
document.querySelectorAll('aside button').length
// Should return: 7 (5 nav items + Add Transaction + Support/Logout)
```

### Issue 2: Console logs appear but page doesn't change
**Symptom:** Logs show correct navigation but content stays the same

**Possible causes:**
- React not re-rendering
- Lazy loading failed
- Component crashed

**Solution:**
```javascript
// Check if React is working
// Look for error after "Rendering XDashboard"
```

### Issue 3: Error: "Failed to fetch lazy component"
**Symptom:** Red error about lazy loading

**Possible causes:**
- Network error
- File not found
- Build issue

**Solution:**
```bash
# Check if all files exist
ls -la dist/assets/*.js
```

## Step 4: Manual Navigation Test

You can manually trigger navigation from the console:

```javascript
// This will try to find the Zustand store and set navigation
window.__testNavigation = (nav) => {
  // Click the button programmatically
  const buttons = Array.from(document.querySelectorAll('aside button'))
  const navButton = buttons.find(b => b.textContent.includes(nav.charAt(0).toUpperCase() + nav.slice(1)))
  if (navButton) {
    navButton.click()
  } else {
    console.error('Button not found for:', nav)
  }
}

// Test it:
__testNavigation('revenue')
__testNavigation('cashflow')
__testNavigation('transactions')
__testNavigation('settings')
```

## Step 5: Check Network Tab

1. Click on **Network** tab in DevTools
2. Click a navigation button
3. Look for new JavaScript files being loaded:
   - `RevenueDashboard-*.js`
   - `CashFlowDashboard-*.js`
   - `TransactionsDashboard-*.js`
   - `AccountSettings-*.js`

**Status codes should be 200** - if you see 404 or 500, that's the problem!

## Step 6: Report Results

Please share:
1. ✅ What console logs you see when clicking
2. ✅ Any red errors in the console
3. ✅ Whether the page content changes or stays the same
4. ✅ Network tab results (file loading status)

## Quick Diagnosis

Run this in the console:
```javascript
console.log('=== DIAGNOSTIC ===');
console.log('Active nav buttons:', document.querySelectorAll('aside nav button').length);
console.log('Current URL:', window.location.href);
console.log('React mounted:', !!document.querySelector('#root > div'));
console.log('Has errors:', console.error.toString());
```
