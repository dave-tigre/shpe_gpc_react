eventName=$1

mkdir $eventName && touch index.mdx 

echo --- >> index.mdx
echo type: "event" >> index.mdx
echo title: "\"${2}\"" >> index.mdx
echo date: "\"${3}\"" >> index.mdx
echo hero_image: "hhm2021.jpg" >> index.mdx
echo hero_image_alt: "SHPE-GPC Hispanic Heritage Month" >> index.mdx
echo hero_image_credit_text: "Stephanie Gago" >> index.mdx
echo hero_image_credit_link: "" >> index.mdx
echo --- >> index.mdx

mv index.mdx ./$eventName
