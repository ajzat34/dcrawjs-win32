wget https://www.dechifro.org/dcraw/dcraw.c --no-check-certificate
gcc dcraw.c -ljpeg -ljasper -llcms2 -o dcraw
