import bpy

verts=[
    (0,0,0),
    (1,0,0),
    (1,1,0),
    (0,1,0),
    (0,0,1),
    (1,0,1),
    (1,1,1),
    (0,1,1),
]

faces=[
    (3,2,1,0),
    (4,5,6,7),
    (4,7,3,0),
    (3,7,6,2),
    (1,2,6,5),
    (1,5,4,0),
]

edges=[]

mesh_data = bpy.data.meshes.new("cube")
mesh_data.from_pydata(verts, edges , faces)

mesh_obj = bpy.data.objects.new("cube_object", mesh_data)

bpy.context.collection.objects.link(mesh_obj)
