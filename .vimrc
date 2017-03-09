" :w!! 
" write the file when you accidentally opened it without the right (root) privileges
cmap w!! w !sudo tee % > /dev/null

set nocompatible

syntax enable
"colorscheme codedark
