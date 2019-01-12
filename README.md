# 3D-Room
3D Room is basically a responsive 3D Room with editable surfaces.
3D Room is using Bootstrap 4 so it's easy to integrate it with your Bootstrap project.

# Example
https://officialpesonen.github.io/3D-Room/

# How it works

There is a palette on the left side of the page where you can select the color and surface.
There are three surfaces: side wall, back wall & floor.
By clicking a color on the palette, the selected surface changes to the previously selected color.
The system takes the color from `.palette-item` 's background color so adding new colors or changing them, is easy.

## Edit a color
Change the background color to your color and you are done.
```html
<div class="col-4 col-sm-3 mb-4">
    <div class="palette-item p-4" style="background-color: #DD4132">1</div>
</div>
```

## Add a color
Find the line where the list of colors start (~line 27) and just add this piece of html bottom of the list (~line 77).
```html
<div class="col-4 col-sm-3 mb-4">
    <div class="palette-item p-4" style="background-color: #DD4132">1</div>
</div>
```
