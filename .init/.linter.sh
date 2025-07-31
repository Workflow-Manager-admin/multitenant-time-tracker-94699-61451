#!/bin/bash
cd /home/kavia/workspace/code-generation/multitenant-time-tracker-94699-61451/react_js_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

