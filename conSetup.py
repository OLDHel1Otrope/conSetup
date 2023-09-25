import bpy
import random

spacing=2.2
for i in range(20):
    for j in range(20):
        bpy.ops.mesh.primitive_cube_add(size=2, enter_editmode=False, align='WORLD', location=(i *spacing, j*spacing, random.random()*100 ), scale=(1, 1, random.random()*10))


print(list(bpy.data.objects))


for obj in bpy.data.objects:
    print(obj.name)