/** ESV passage text for belief section scripture references. */
export const ESV_SCRIPTURES: Readonly<Record<string, string>> = {
  'Genesis 1:1':
    'In the beginning, God created the heavens and the earth.',
  'Matthew 28:19':
    'Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit,',
  '1 Peter 1:2':
    'according to the foreknowledge of God the Father, in the sanctification of the Spirit, for obedience to Jesus Christ and for sprinkling with his blood: May grace and peace be multiplied to you.',
  'John 1:1-5':
    'In the beginning was the Word, and the Word was with God, and the Word was God. He was in the beginning with God. All things were made through him, and without him was not any thing made that was made. In him was life, and the life was the light of men. The light shines in the darkness, and the darkness has not overcome it.',
  'Hebrews 4:14-15':
    'Since then we have a great high priest who has passed through the heavens, Jesus, the Son of God, let us hold fast our confession. For we do not have a high priest who is unable to sympathize with our weaknesses, but one who in every respect has been tempted as we are, yet without sin.',
  '1 Corinthians 15:3-4':
    'For I delivered to you as of first importance what I also received: that Christ died for our sins in accordance with the Scriptures, that he was buried, that he was raised on the third day in accordance with the Scriptures,',
  '2 Corinthians 3:17':
    'Now the Lord is the Spirit, and where the Spirit of the Lord is, there is freedom.',
  'John 16:7-13':
    'Nevertheless, I tell you the truth: it is to your advantage that I go away, for if I do not go away, the Helper will not come to you. But if I go, I will send him to you. And when he comes, he will convict the world concerning sin and righteousness and judgment: concerning sin, because they do not believe in me; concerning righteousness, because I go to the Father, and you will see me no longer; concerning judgment, because the ruler of this world is judged. I still have many things to say to you, but you cannot bear them now. When the Spirit of truth comes, he will guide you into all the truth, for he will not speak on his own authority, but whatever he hears he will speak, and he will declare to you the things that are to come.',
  'Galatians 5:25':
    'If we live by the Spirit, let us also keep in step with the Spirit.',
  'John 3:16':
    'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
  'Romans 6:23':
    'For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord.',
  'Revelation 20:15':
    'And if anyone\'s name was not found written in the book of life, he was thrown into the lake of fire.',
  'Genesis 1:27':
    'So God created man in his own image, in the image of God he created him; male and female he created them.',
  'Psalm 8:3-6':
    'When I look at your heavens, the work of your fingers, the moon and the stars, which you have set in place, what is man that you are mindful of him, and the son of man that you care for him? Yet you have made him a little lower than the heavenly beings and crowned him with glory and honor. You have given him dominion over the works of your hands; you have put all things under his feet,',
  'Isaiah 53:6a':
    'All we like sheep have gone astray; we have turned—every one—to his own way;',
  'Ephesians 2:8-9':
    'For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
  'John 14:6':
    'Jesus said to him, "I am the way, and the truth, and the life. No one comes to the Father except through me."',
  'Romans 5:1':
    'Therefore, since we have been justified by faith, we have peace with God through our Lord Jesus Christ.',
  'John 10:29':
    'My Father, who has given them to me, is greater than all, and no one is able to snatch them out of the Father\'s hand.',
  '2 Timothy 1:12':
    'But I am not ashamed, for I know whom I have believed, and I am convinced that he is able to guard until that day what has been entrusted to me.',
  'Hebrews 7:25':
    'Consequently, he is able to save to the uttermost those who draw near to God through him, since he always lives to make intercession for them.',
  '2 Timothy 3:16-17':
    'All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness, that the man of God may be complete, equipped for every good work.',
  '2 Peter 1:20-21':
    'knowing this first of all, that no prophecy of Scripture comes from someone\'s own interpretation. For no prophecy was ever produced by the will of man, but men spoke from God as they were carried along by the Holy Spirit.',
  'Psalm 119:105':
    'Your word is a lamp to my feet and a light to my path.',
  'Matthew 28:19-20':
    'Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age.',
  'Romans 6:4':
    'We were buried therefore with him by baptism into death, in order that, just as Christ was raised from the dead by the glory of the Father, we too might walk in newness of life.',
  'Acts 8:36-38':
    'And as they were going along the road they came to some water, and the eunuch said, "See, here is water! What prevents me from being baptized?" And he commanded the chariot to stop, and they both went down into the water, Philip and the eunuch, and he baptized him.',
  '1 Corinthians 11:23-26':
    'For I received from the Lord what I also delivered to you, that the Lord Jesus on the night when he was betrayed took bread, and when he had given thanks, he broke it, and said, "This is my body, which is for you. Do this in remembrance of me." In the same way also he took the cup, after supper, saying, "This cup is the new covenant in my blood. Do this, as often as you drink it, in remembrance of me." For as often as you eat this bread and drink the cup, you proclaim the Lord\'s death until he comes.',
  'Luke 22:19-20':
    'And he took bread, and when he had given thanks, he broke it and gave it to them, saying, "This is my body, which is given for you. Do this in remembrance of me." And likewise the cup after they had eaten, saying, "This cup that is poured out for you is the new covenant in my blood."',
};

export function scriptureTooltip(ref: string): string {
  const text = ESV_SCRIPTURES[ref];
  if (!text) {
    return ref;
  }
  return `${ref} (ESV)\n\n${text}`;
}
