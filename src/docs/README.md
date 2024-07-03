# Generating bytecodes

Generate byte-code: --print-bytecode
Filter byte-code: --print-bytecode-filter

Examples:
v8 --print-bytecode ./dummy.js
v8 --print-bytecode --print-bytecode-filter=* ./dummy.js

All: *
v8 --print-bytecode --print-bytecode-filter=* ./dummy.js

Global code only: ""
v8 --print-bytecode --print-bytecode-filter="" ./dummy.js

All except global code: -
v8 --print-bytecode --print-bytecode-filter=- ./dummy.js

All except of function name: -name
v8 --print-bytecode --print-bytecode-filter=-name ./dummy.js

All functions with name of name: name
v8 --print-bytecode --print-bytecode-filter=name ./dummy.js

All functions with name template of name: name*
v8 --print-bytecode --print-bytecode-filter=name* ./dummy.js

Link: https://source.chromium.org/chromium/chromium/src/+/main:v8/src/utils/utils.cc;drc=b422146c9469338fdfd4afb59e7680200fd094fd;l=234

# Additional options:

Tracing optimization on/off logs:
v8 --trace-opt --trace-deopt ./dummy.js
