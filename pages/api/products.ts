export async function getProducts({
  width,
  height,
}: {
  width: number;
  height: number;
}) {
  const products = [
    {
      title: 'Hestia',
      productId: '120499343',
      lead: 'This inspiration behind the artwork & what it means.',
      description:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
      image: {
        src: '/../public/static/images/gold_necklace.jpg',
        alt: 'A golden necklace in editorial styling. Rays of sunlight and pastel colors draw the attention to the necklace sitting on a minimal background.',
        width: width,
        height: height,
      },
    },

    {
      title: 'Ares',
      productId: '234233241',
      lead: 'This inspiration behind the artwork & what it means.',
      description:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
      image: {
        src: '/../public/static/images/necklace_solo-hanging.jpg',
        alt: 'a golden necklace, editorial, rays of sunlight, pastel colors, professional photography, minimal background.',
        width: width,
        height: height,
      },
    },

    {
      title: 'Gaia (Ring)',
      productId: '33237894',
      lead: 'This inspiration behind the artwork & what it means.',
      description:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
      image: {
        src: '/../public/static/images/ring_solo_diamond.jpg',
        alt: 'a golden necklace, editorial, rays of sunlight, pastel colors, professional photography, minimal background.',
        width: width,
        height: height,
      },
    },

    {
      title: 'Hera (Ring)',
      productId: '82374523',
      lead: 'This inspiration behind the artwork & what it means.',
      description:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
      image: {
        src: '/../public/static/images/model_headshot_gold_necklace.jpg',
        alt: 'fashion jewellry, editorial, rays of sunlight, pastel colors, professional photography, minimal background.',
        width: width,
        height: height,
      },
    },

    {
      title: 'Persephone',
      productId: '99012834',
      lead: 'This inspiration behind the artwork & what it means.',
      description:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
      image: {
        src: '/../public/static/images/model_framed_gold_bracelet.jpg',
        alt: 'fashion jewellry, editorial, rays of sunlight, pastel colors, professional photography, minimal background.',
        width: width,
        height: height,
      },
    },

    {
      title: 'Eris',
      productId: '99012834',
      lead: 'This inspiration behind the artwork & what it means.',
      description:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
      image: {
        src: '/../public/static/images/necklace_display_pastel.jpg',
        alt: 'fashion jewellry, editorial, rays of sunlight, pastel colors, professional photography, minimal background.',
        width: width,
        height: height,
      },
    },
  ];

  return products;
}

export default async (req, res) => {
  if (req.method === 'GET') {
    const products = await getProducts({ width: 450, height: 450 });
    res.status(200).json({ products });
  }
};
