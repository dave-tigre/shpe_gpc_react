eventName=$1
folderName="${3}-$eventName"
mkdir $folderName && touch index.mdx 

echo --- >> index.mdx
echo type: "\"event\"" >> index.mdx
echo title: "\"${2}\"" >> index.mdx
echo date: "\"${3}\"" >> index.mdx
echo hero_image: "\"eventImage.png\"" >> index.mdx
echo hero_image_alt: "\"\"" >> index.mdx
echo hero_image_credit_text: "\"\"" >> index.mdx
echo hero_image_credit_link: "\"\"" >> index.mdx
echo --- >> index.mdx

mv index.mdx ./$folderName
