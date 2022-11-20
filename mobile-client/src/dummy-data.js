import { image1, image2, image3, bigImage } from "./dummy-images";

const composition = `Each film-coated tablet contains 10 mg escitalopram (as oxalate).
For a full list of excipients, see section 6.1.`;

const form = `Film-coated tablet.
Escitalopram 10 mg: White to off – white colored, oval shaped, film-coated, biconvex tablets debossed with 'F' on one side and '56' on the other side with a deep scoreline between '5' and '6'. The size is 11.6 mm X 7.1 mm.
The tablets can be divided into equal doses.`;


let medicines = [
    {
        name: "Escitalopram Cinfa 10mg",
        productName: "Escitalopram 10 mg film-coated tablets",
        composition,
        form,
        available: true,
        image: image1,
        bigImage: bigImage,

    },
    {
        name: "Escitalopram Cinfa 20mg",
        productName: "Escitalopram 20 mg film-coated tablets",
        composition,
        form,
        available: true,
        image: image2,
        bigImage: bigImage,
    },
    {
        name: "Escitalopram Kern Pharma 20mg",
        productName: "Escitalopram 20 mg film-coated tablets",
        composition,
        form,
        available: false,
        image: image3,
        bigImage: bigImage,
    },
];

// medicines = medicines.concat(medicines).concat(medicines)

export { medicines };
