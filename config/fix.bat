@echo off
echo 'Fixing ViewPropTypes issues'
REM Fix ViewPropTypes issues
ECHO export const ViewPropTypes = { style: null };>>"PATH_TO_NODE_MODULES/react-native-web/dist/index.js"