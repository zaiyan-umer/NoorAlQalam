interface Painting {
    imgUrl: string;
    title: string;
    isFeatured: boolean;
    price: string;
    description: string;
}

export const classicalPaintings: Painting[] = [
    {
        imgUrl: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/classical/alhamd.jpg`,
        title: "Al-Fatiha - Opening in Praise",
        isFeatured: true,
        price: "80,000 PKR | $300",
        description: `“In the name of Allah, the Most Gracious, the Most Merciful. All praise is due to Allah, Lord of the Worlds.” <br />
        This dynamic composition features the opening verses of the Holy Qur'an, Surah Al-Fatiha, rendered in expressive Khat-e-Sulus script. The vibrant strokes of turquoise, crimson, and emerald green swirl against a richly textured backdrop of deep ochres and maroons, symbolizing spiritual depth and divine presence. The layered calligraphy evokes movement and energy, suggesting the eternal and unfolding nature of divine praise. Each stroke blends tradition with contemporary abstraction, inviting contemplation and reverence.
        `,
    },
    {
        imgUrl: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/classical/masha-2.jpg`,
        title: "Masha’Allah • No Strength but Allah",
        isFeatured: true,
        price: "80,000 PKR | $300",
        description: `ماشاءالله لا قوة إلا بالله
                        Which translates to:

                        "What Allah has willed; there is no power except with Allah."

                        This phrase combines two deeply meaningful expressions:

                        ماشاءالله (Masha’Allah): Recognition that something beautiful or good has happened by Allah’s will.

                        لا قوة إلا بالله (La quwwata illa billah): A reminder that all strength and power come only from Allah.`,
    },
    {
        imgUrl: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/classical/drood-a.jpg`,
        title: "اللهم صل على محمد",
        isFeatured: true,
        price: "80,000 PKR | $300",
        description: ``,
    },

    {
        imgUrl: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/classical/alhamd-2.jpg`,
        title: "الفاتحة",
        isFeatured: true,
        price: "80,000 PKR | $300",
        description: ``,
    },


    {
        imgUrl: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/classical/m2.jpg`,
        title: "Power Belongs to Allah",
        isFeatured: true,
        price: "80,000 PKR | $300",
        description: ``,
    },

    {
        imgUrl: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/classical/drood-b.jpg`,
        title: "Blessings upon the Prophet",
        isFeatured: true,
        price: "80,000 PKR | $300",
        description: ``,
    },
    {
        imgUrl: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/classical/alhamd-1.jpg`,
        title: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
        isFeatured: true,
        price: "80,000 PKR | $300",
        description: ``,
    },


    {
        imgUrl: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/classical/masha-2.jpg`,
        title: "ما شاء الله",
        isFeatured: true,
        price: "80,000 PKR | $300",
        description: ``,
    },

    {
        imgUrl: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/classical/surah-ikhlas.jpg`,
        title: "الإخلاص",
        isFeatured: true,
        price: "80,000 PKR | $300",
        description: ``,
    },


]

export const signaturePaintings: Painting[] = [
    {
        imgUrl: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/general/sign.jpg`,
        title: "آية الكرسي",
        isFeatured: true,
        price: "70,000 PKR | $250",
        description: ``,
    },
]