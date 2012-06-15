---
title: Blogging with Wok
datetime: 2012-06-14 19:03:11
type: entry
category: blog
title_img_src: https://lh5.googleusercontent.com/-sntcjMNI_zY/T9qLDX6Rb9I/AAAAAAAAA7A/32MyUpSX3bo/s{img_width}/984423_25566484.jpg
snippet: I never thought I'd run into a problem with OS memory management, but it seems I've finally crossed that barrier. While writing a python script for correcting missing values in the PNWMoths database, I found out I needed to parallelize the work in some fashion after seeing how long it was going to take the
---
# Zoomify Procedures
## Imaging Computer
 1. Navigate to the **"C:\Images\Moths\"** directory.
 2. Click and run the *export_as_tiff.bat* file. This will take a minute, but it will move any new tiffs to the **"C:\Images\Moths\Final Moths Tiff\"** directory.
 3. Open the program *ZoomifyConvertor.exe* in **"C:\Images\Moths\"**
 4. Navigate to the **"C:\Images\Moths\Final Moths Tiff\"** and sort these by date, noticing which images are new.
 5. Highlight the new images to be zoomified and drag them onto your already opened Zoomify window. This will create a set of folders (named after the tiffs) in the **"C:\Images\Moths\Final Moths Tiff\"** directory.
 6. When Zoomify is finished, select all these new zoomified folders and copy them onto a flash drive.
 7. Then move these folders from **"C:\Images\Moths\Final Moths Tiff\"** into **"C:\Images\Moths\Final Moths Zoomified\"** (We want to keep things organized on the filesystem).

## Internet Computer
 1. Plug in your USB drive that you copied the zoomified folders onto.
 2. Copy these folders into the folder titled *Moths_Zoomified* on your **Desktop**.
 3. Click and run the script titled *zoomify_upload.cmd*.
 4. When the script has finished, all the zoomified images should be uploaded and also removed from the *Moths_Zoomified* folder on the Desktop.

## State of Zoomified Images
 1. Currently zoomified images are grabbed based on a *closely* matching filename, this can lead to problems when image names get seriously modified. In the future, these links might be made explicit in the admin interface which will probably require another step via the web interface. I'll update the Wiki if/when this change occurs.