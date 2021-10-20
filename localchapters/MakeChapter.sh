chapterName=$1
chapterEmail=$2
chapterImageSource=$3
chapterImageFilename="${3##*/}"
folderName="${chapterName// /-}"
mkdir $folderName && touch index.mdx 

echo --- >> index.mdx
echo type: "\"chapter\"" >> index.mdx
echo name: "\"${chapterName}\"" >> index.mdx
echo email: "\"${chapterEmail}\"" >> index.mdx
echo hero_image: "\"chapterImage.png\"" >> index.mdx
echo hero_image_alt: "\"\"" >> index.mdx
echo hero_image_credit_text: "\"\"" >> index.mdx
echo hero_image_credit_link: "\"\"" >> index.mdx
echo --- >> index.mdx

mv index.mdx ${chapterImageSource} ./$folderName
mv ./$folderName/${chapterImageFilename} ./$folderName/chapterImage.png
