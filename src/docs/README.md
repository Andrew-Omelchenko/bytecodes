Generate byte-code: --print-bytecode
Filter byte-code: --print-bytecode-filter

Examples:
d8 --print-bytecode ./dummy.js
d8 --print-bytecode --print-bytecode-filter=* ./dummy.js

All: *
d8 --print-bytecode --print-bytecode-filter=* ./dummy.js

Global Code only: ""
d8 --print-bytecode --print-bytecode-filter="" ./dummy.js

All except Global Code: -
d8 --print-bytecode --print-bytecode-filter=- ./dummy.js

All except of function name: -name
d8 --print-bytecode --print-bytecode-filter=-name ./dummy.js

All functions with name of name: name
d8 --print-bytecode --print-bytecode-filter=name ./dummy.js

All functions with name template of name: name*
d8 --print-bytecode --print-bytecode-filter=name* ./dummy.js

Link: https://source.chromium.org/chromium/chromium/src/+/main:v8/src/utils/utils.cc;drc=b422146c9469338fdfd4afb59e7680200fd094fd;l=234
