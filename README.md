## Repo For Ionic Bug

bug: all buttons not working in ion-modal

## Current Behavior

All ion-modal buttons don't work when ion-modal works with ion-header, ion-buttons, ion-popover, ion-list. None of the methods bound to click are called.

## Expected Behavior

All buttons in ion-modal do what they are supposed to do.

## Steps to Reproduce

1. Run git clone https://github.com/angelofan/ion-modal-in-popover.git
2. Run npm install
3. Run on web, And press F12 to open the debug console in browser.
4. Click "+" button, then click "Open Modal".
5. Click all the buttons in turn, none of them work.

## Ionic Info

```
[WARN] Error loading @ionic/angular package.json: Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: Package subpath './package' is
       not defined by "exports" in D:\myrepo\ion-modal-in-popover\node_modules\@ionic\angular\package.json
[WARN] Error loading @capacitor/ios package.json: Error: Cannot find module '@capacitor/ios/package'
       
       Require stack:
       - C:\Users\Administrator\AppData\Roaming\npm\node_modules\@ionic\cli\lib\project\index.js    
       - C:\Users\Administrator\AppData\Roaming\npm\node_modules\@ionic\cli\lib\index.js
       - C:\Users\Administrator\AppData\Roaming\npm\node_modules\@ionic\cli\index.js
       - C:\Users\Administrator\AppData\Roaming\npm\node_modules\@ionic\cli\bin\ionic
[WARN] Error loading @capacitor/android package.json: Error: Cannot find module '@capacitor/android/package'
       
       Require stack:
       - C:\Users\Administrator\AppData\Roaming\npm\node_modules\@ionic\cli\lib\project\index.js
       - C:\Users\Administrator\AppData\Roaming\npm\node_modules\@ionic\cli\lib\index.js
       - C:\Users\Administrator\AppData\Roaming\npm\node_modules\@ionic\cli\index.js
       - C:\Users\Administrator\AppData\Roaming\npm\node_modules\@ionic\cli\bin\ionic

Ionic:

   Ionic CLI                     : 6.20.8 (C:\Users\Administrator\AppData\Roaming\npm\node_modules\@ionic\cli)
   Ionic Framework               : not installed
   @angular-devkit/build-angular : 16.0.4
   @angular-devkit/schematics    : 16.0.4
   @angular/cli                  : 16.0.4
   @ionic/angular-toolkit        : 9.0.0

Capacitor:

   Capacitor CLI      : 5.0.4
   @capacitor/android : not installed
   @capacitor/core    : 5.0.4
   @capacitor/ios     : not installed

Utility:

   cordova-res : not installed globally
   native-run  : 1.7.2

System:

   NodeJS : v18.13.0 (C:\Program Files\nodejs\node.exe)
   npm    : 8.19.3
   OS     : Windows 10
```