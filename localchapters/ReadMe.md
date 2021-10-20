# Local Chapters

This folder contains information about the chapters affiliated with SHPE-GPC.

## Creating a Chapter Using Helper

For Convenience a helper bash script has been created to make new chapters which does all file creating and naming
>$ bash MakeChapter.sh "example-chapter-dir" "example@email.com" "your-image-source-here"

## Creating a Chapter Manually
For the chapter information and images to be loaded properly a folder with the chapter name must be created in this directory (localchapters).


The folder must not have any spaces, dashes are preferred to underscores:
> example-chapter-dir

The folder must the following:
- MDX File named:
> index.mdx
- Image File named:
> chapterImage.png

In total the structure is as follows:

```
localchapters
│   README.md
│   MakeChapter.sh   
│
└───example-chapter-dir
│   │   index.mdx
│   │   chapterImage.png
│   
└───example-chapter-dir2
    │   index.mdx
    │   chapterImage.png
```
Once the directory of the chapter has been created, populate the index.mdx file with the following including the dashes at the top and bottom:

'''
---
type: "chapter"
name: "<chapter-name-here>"
email: "chapter-email-here"
hero_image: "chapterImage.png"
hero_image_alt: ""
hero_image_credit_text: ""
hero_image_credit_link: ""
---

'''


