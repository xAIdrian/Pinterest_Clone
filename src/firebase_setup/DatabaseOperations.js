import { collection, doc, addDoc, getDoc, updateDoc, getDocs, deleteDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';

import { firestore } from '../firebase_setup/firebase.js';
import imageCompression from 'browser-image-compression';

export async function fetchPinsBackend() {
  return [
    {
      "tags": [
          "Marketing",
          "Sales",
          "Entrepreneurship"
      ],
      "description": "Vivamus pulvinar odio vitae finibus maximus. Phasellus et augue dui. Etiam imperdiet porta nibh convallis condimentum. Sed sit amet arcu non magna sodales commodo. Aenean a ornare nisl, nec molestie quam. Quisque luctus viverra purus, ac elementum ex ornare nec. Integer convallis, justo vel facilisis sollicitudin, sapien metus placerat sem, vel consectetur enim ante a libero. Ut ornare, nulla ut feugiat condimentum, nunc quam iaculis ligula, a hendrerit ex erat nec tellus. Fusce dictum vel felis id gravida. Sed sollicitudin mauris quis mi bibendum, non condimentum ligula mattis. Maecenas gravida libero purus. Cras bibendum vulputate finibus. In et porttitor turpis.      ",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%208.47.24%E2%80%AFAM.png?alt=media&token=7f501d93-3026-41d7-8cd7-88c68b37beec",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Getting nonstop sales!",
      "id": "wUDQoTyabTCS0uTPjMpLafsdfa"
    },
    {
      "tags": [
          "Marketing",
          "Sales",
          "Entrepreneurship"
      ],
      "description": "Man braid chia gorpcore raw denim fingerstache. Copper mug vape small batch yr Brooklyn bitters vice cupping aesthetic dreamcatcher. YOLO skateboard austin, messenger bag shoreditch selfies schlitz chillwave big mood salvia marxism chicharrones letterpress viral food truck. Gochujang locavore vaporware, migas venmo quinoa etsy swag blue bottle woke. Kickstarter small batch williamsburg deep v irony solarpunk ascot pabst whatever pour-over ennui church-key. You probably haven't heard of them ramps neutral milk hotel try-hard tonx chartreuse PBR&B man braid crucifix deep v pabst. Pickled pok pok vibecession chillwave praxis, tattooed dreamcatcher blackbird spyplane ramps franzen actually etsy banjo jawn.      ",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%209.47.24%E2%80%AFAM.png?alt=media&token=20fad1bf-9b5b-4c5d-ab46-026b8c356c62",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Exciting new post!",
      "id": "wUDQoTyabTCS0uTPjMpLasdfgsdfg"
    },
    {
      "tags": [
          "Ferns",
          "Green",
          "Nature",
          "Plant",
          "Spores"
      ],
      "description": "Art party bespoke four loko woke roof party, coloring book brunch pork belly glossier. Wayfarers blue bottle mustache tote bag 90's quinoa. Hexagon thundercats bitters gluten-free vice narwhal. Authentic photo booth gorpcore, adaptogen everyday carry pork belly gastropub. Pour-over leggings yr, pabst palo santo polaroid listicle. Meditation beard VHS, flannel bicycle rights vaporware la croix grailed air plant try-hard synth fam cred.      ",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%208.47.29%E2%80%AFAM.png?alt=media&token=4c735944-c161-4f53-9ee5-f87fc8be85c1",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Bespoke engagement",
      "id": "wUDQoTyabTCS0uTPjMpLdfghjfdghj"
    },
    {
      "tags": [
          "Ferns",
          "Green",
          "Nature",
          "Plant",
          "Spores"
      ],
      "description": "Narwhal VHS kogi, live-edge tousled mukbang gorpcore. Ennui bicycle rights whatever chicharrones plaid master cleanse. 3 wolf moon tote bag cliche aesthetic cred, kombucha pug normcore umami stumptown franzen knausgaard authentic echo park. Pitchfork man bun slow-carb, humblebrag iceland bitters migas pug truffaut.      ",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%209.53.06%E2%80%AFAM.png?alt=media&token=bec739c9-d595-4f45-ab2a-0b823b7eaec5",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "More engagement now",
      "id": "wUDQoTyabTCS0uTPjMpLfgh"
    },
    {
      "tags": [
          "Ferns",
          "Green",
          "Nature",
          "Plant",
          "Spores"
      ],
      "description": "Ethical viral venmo fit mustache tousled cloud bread try-hard roof party flannel four dollar toast prism. Williamsburg blue bottle ramps glossier celiac. Blackbird spyplane poutine thundercats, selfies butcher normcore organic sartorial narwhal semiotics sriracha 8-bit swag. Post-ironic vaporware humblebrag raclette chia chicharrones lumbersexual chartreuse DSA hashtag activated charcoal single-origin coffee. Fit 8-bit PBR&B viral.      ",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%208.47.39%E2%80%AFAM.png?alt=media&token=62ee9b1a-9ce7-4e59-94b5-8a3672ed38c3",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Hipster hacking news",
      "id": "wUDQoTyabTCS0uTPjMpLtyruty"
    },
    {
      "tags": [
          "Marketing",
          "Sales",
          "Entrepreneurship"
      ],
      "description": "Microdosing tonx blog, letterpress praxis chia tattooed pour-over fingerstache. Pork belly try-hard iceland fit blackbird spyplane. Lumbersexual green juice pinterest, jianbing distillery twee venmo grailed af mlkshk bushwick. Chia ramps banh mi everyday carry gluten-free taxidermy truffaut YOLO cronut meditation meh hexagon tacos chartreuse mustache. ",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%209.47.24%E2%80%AFAM.png?alt=media&token=20fad1bf-9b5b-4c5d-ab46-026b8c356c62",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Hack with a new guy",
      "id": "wUDQoTyabTCS0uTPjMpLcvbn"
    },
    {
      "tags": [
          "Marketing",
          "Sales",
          "Entrepreneurship"
      ],
      "description": " Chia ramps banh mi everyday carry gluten-free taxidermy truffaut YOLO cronut meditation meh hexagon tacos chartreuse mustache. Aesthetic paleo shaman jean shorts man braid, roof party pickled art party vegan gentrify tilde butcher kombucha. 8-bit snackwave trust fund hoodie cloud bread man bun hashtag banjo raclette pitchfork, hell of tacos austin try-hard.",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%209.53.25%E2%80%AFAM.png?alt=media&token=8d90a8de-b6fb-4927-ade4-2067ed3b308f",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Hardcore sales X",
      "id": "wUDQoTyabTCS0uTPjMpLzxcfzxd"
    },
    {
      "tags": [
          "Marketing",
          "Sales",
          "Entrepreneurship"
      ],
      "description": "I'm baby organic cardigan chartreuse locavore veniam exercitation tattooed master cleanse iPhone. Pop-up street art butcher kogi tbh officia cray messenger bag adaptogen kombucha viral listicle aliquip ipsum. Affogato pickled kogi selfies, migas health goth tattooed. JOMO waistcoat keffiyeh paleo gatekeep.      ",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%209.47.24%E2%80%AFAM.png?alt=media&token=20fad1bf-9b5b-4c5d-ab46-026b8c356c62",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Between two ferns",
      "id": "wUDQoTyabTCS0uTPjMpLghjkg"
    },
    {
      "tags": [
          "Ferns",
          "Green",
          "Nature",
          "Plant",
          "Spores"
      ],
      "description": "Brunch kogi ullamco, pitchfork actually taxidermy wolf cupidatat health goth adipisicing ex. Bitters chia intelligentsia, edison bulb affogato mumblecore palo santo velit in lumbersexual. Irony direct trade culpa listicle aliqua nostrud. Ut fit narwhal organic in occaecat Brooklyn scenester actually four loko enim bicycle rights banh mi.      ",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%208.47.52%E2%80%AFAM.png?alt=media&token=1dc86dd3-ba75-4b70-a8a3-3b64a9fd1c12",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Endangered Content",
      "id": "wUDQoTyabTCS0uTPjMpLyuit"
    },
    {
      "tags": [
          "Ferns",
          "Green",
          "Nature",
          "Plant",
          "Spores"
      ],
      "description": "Ferns are a group of ancient plants that have been around for over 360 million years, predating the dinosaurs. They are known for their distinctive fronds, which can range in size from just a few inches to over 30 feet long. Ferns are found in a wide range of environments, from damp forests and swamps to arid deserts and high-altitude mountain ranges. They reproduce via spores rather than seeds, and have a unique life cycle that involves alternating between a sporophyte and gametophyte phase. Ferns have been used for a variety of purposes throughout human history, including as a source of food, medicine, and decoration.",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%209.53.42%E2%80%AFAM.png?alt=media&token=13c8e4ce-3f3e-44d4-821f-0ba758fb3e7f",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Green Ferns",
      "id": "wUDQoTyabTCS0uTPjMpLqwe"
    },
    {
      "tags": [
          "Ferns",
          "Green",
          "Nature",
          "Plant",
          "Spores"
      ],
      "description": "Ferns are a group of ancient plants that have been around for over 360 million years, predating the dinosaurs. They are known for their distinctive fronds, which can range in size from just a few inches to over 30 feet long. Ferns are found in a wide range of environments, from damp forests and swamps to arid deserts and high-altitude mountain ranges. They reproduce via spores rather than seeds, and have a unique life cycle that involves alternating between a sporophyte and gametophyte phase. Ferns have been used for a variety of purposes throughout human history, including as a source of food, medicine, and decoration.",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%209.50.19%E2%80%AFAM.png?alt=media&token=96815ab2-e54b-454f-a8eb-595306aef990",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Green Ferns",
      "id": "wUDQoTyabTCS0uTPjMpvbnfghjf"
    },
    {
      "tags": [
          "Ferns",
          "Green",
          "Nature",
          "Plant",
          "Spores"
      ],
      "description": "Ferns are a group of ancient plants that have been around for over 360 million years, predating the dinosaurs. They are known for their distinctive fronds, which can range in size from just a few inches to over 30 feet long. Ferns are found in a wide range of environments, from damp forests and swamps to arid deserts and high-altitude mountain ranges. They reproduce via spores rather than seeds, and have a unique life cycle that involves alternating between a sporophyte and gametophyte phase. Ferns have been used for a variety of purposes throughout human history, including as a source of food, medicine, and decoration.",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%208.47.57%E2%80%AFAM.png?alt=media&token=e203b34c-6774-49f8-960a-b27e939be1e7",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Green Ferns",
      "id": "wUDQoTyabTCS0uTPjMpLyityuot"
    },
    {
      "tags": [
          "Ferns",
          "Green",
          "Nature",
          "Plant",
          "Spores"
      ],
      "description": "Ferns are a group of ancient plants that have been around for over 360 million years, predating the dinosaurs. They are known for their distinctive fronds, which can range in size from just a few inches to over 30 feet long. Ferns are found in a wide range of environments, from damp forests and swamps to arid deserts and high-altitude mountain ranges. They reproduce via spores rather than seeds, and have a unique life cycle that involves alternating between a sporophyte and gametophyte phase. Ferns have been used for a variety of purposes throughout human history, including as a source of food, medicine, and decoration.",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%209.55.03%E2%80%AFAM.png?alt=media&token=c92b3ce4-4fab-4563-96fd-cd837346ce3b",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Green Ferns",
      "id": "wUDQoTyabTCS0uTPjMpLasdcvbn"
    },
    {
      "tags": [
          "Ferns",
          "Green",
          "Nature",
          "Plant",
          "Spores"
      ],
      "description": "Ferns are a group of ancient plants that have been around for over 360 million years, predating the dinosaurs. They are known for their distinctive fronds, which can range in size from just a few inches to over 30 feet long. Ferns are found in a wide range of environments, from damp forests and swamps to arid deserts and high-altitude mountain ranges. They reproduce via spores rather than seeds, and have a unique life cycle that involves alternating between a sporophyte and gametophyte phase. Ferns have been used for a variety of purposes throughout human history, including as a source of food, medicine, and decoration.",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%208.48.03%E2%80%AFAM.png?alt=media&token=72038c8b-2275-4806-8b7a-8b0afd9178a8",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Green Ferns",
      "id": "wUDQoTyabTCS0uTPjMpLxchrtyr"
    },
    {
      "tags": [
          "Ferns",
          "Green",
          "Nature",
          "Plant",
          "Spores"
      ],
      "description": "Ferns are a group of ancient plants that have been around for over 360 million years, predating the dinosaurs. They are known for their distinctive fronds, which can range in size from just a few inches to over 30 feet long. Ferns are found in a wide range of environments, from damp forests and swamps to arid deserts and high-altitude mountain ranges. They reproduce via spores rather than seeds, and have a unique life cycle that involves alternating between a sporophyte and gametophyte phase. Ferns have been used for a variety of purposes throughout human history, including as a source of food, medicine, and decoration.",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%208.48.10%E2%80%AFAM.png?alt=media&token=cf1ac8d3-a46c-45fa-b727-8ea7ab24cee3",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Green Ferns",
      "id": "wUDQoTyabTCS0uTPjMpLhjfghiy"
    },
    {
      "tags": [
          "Ferns",
          "Green",
          "Nature",
          "Plant",
          "Spores"
      ],
      "description": "Ferns are a group of ancient plants that have been around for over 360 million years, predating the dinosaurs. They are known for their distinctive fronds, which can range in size from just a few inches to over 30 feet long. Ferns are found in a wide range of environments, from damp forests and swamps to arid deserts and high-altitude mountain ranges. They reproduce via spores rather than seeds, and have a unique life cycle that involves alternating between a sporophyte and gametophyte phase. Ferns have been used for a variety of purposes throughout human history, including as a source of food, medicine, and decoration.",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%209.50.19%E2%80%AFAM.png?alt=media&token=96815ab2-e54b-454f-a8eb-595306aef990",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Green Ferns",
      "id": "wUDQoTyabTCS0uTPjMpLmfthyi"
    },
    {
      "tags": [
          "Marketing",
          "Sales",
          "Entrepreneurship"
      ],
      "description": "Ferns are a group of ancient plants that have been around for over 360 million years, predating the dinosaurs. They are known for their distinctive fronds, which can range in size from just a few inches to over 30 feet long. Ferns are found in a wide range of environments, from damp forests and swamps to arid deserts and high-altitude mountain ranges. They reproduce via spores rather than seeds, and have a unique life cycle that involves alternating between a sporophyte and gametophyte phase. Ferns have been used for a variety of purposes throughout human history, including as a source of food, medicine, and decoration.",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%208.47.24%E2%80%AFAM.png?alt=media&token=7f501d93-3026-41d7-8cd7-88c68b37beec",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Getting nonstop sales!",
      "id": "wUDQoTyabTCS0uTPjMpLtyuiiop"
    },
    {
      "tags": [
          "Marketing",
          "Sales",
          "Entrepreneurship"
      ],
      "description": "Ferns are a group of ancient plants that have been around for over 360 million years, predating the dinosaurs. They are known for their distinctive fronds, which can range in size from just a few inches to over 30 feet long. Ferns are found in a wide range of environments, from damp forests and swamps to arid deserts and high-altitude mountain ranges. They reproduce via spores rather than seeds, and have a unique life cycle that involves alternating between a sporophyte and gametophyte phase. Ferns have been used for a variety of purposes throughout human history, including as a source of food, medicine, and decoration.",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%209.47.24%E2%80%AFAM.png?alt=media&token=20fad1bf-9b5b-4c5d-ab46-026b8c356c62",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Getting nonstop sales!",
      "id": "wUDQoTyabTCS0uTPjMpLweqrasdf"
    },
    {
      "tags": [
          "Ferns",
          "Green",
          "Nature",
          "Plant",
          "Spores"
      ],
      "description": "Ferns are a group of ancient plants that have been around for over 360 million years, predating the dinosaurs. They are known for their distinctive fronds, which can range in size from just a few inches to over 30 feet long. Ferns are found in a wide range of environments, from damp forests and swamps to arid deserts and high-altitude mountain ranges. They reproduce via spores rather than seeds, and have a unique life cycle that involves alternating between a sporophyte and gametophyte phase. Ferns have been used for a variety of purposes throughout human history, including as a source of food, medicine, and decoration.",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%208.47.29%E2%80%AFAM.png?alt=media&token=4c735944-c161-4f53-9ee5-f87fc8be85c1",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Green Ferns",
      "id": "wUDQoTyabTCS0uTPjMpLhgjtyui"
    },
    {
      "tags": [
          "Ferns",
          "Green",
          "Nature",
          "Plant",
          "Spores"
      ],
      "description": "Ferns are a group of ancient plants that have been around for over 360 million years, predating the dinosaurs. They are known for their distinctive fronds, which can range in size from just a few inches to over 30 feet long. Ferns are found in a wide range of environments, from damp forests and swamps to arid deserts and high-altitude mountain ranges. They reproduce via spores rather than seeds, and have a unique life cycle that involves alternating between a sporophyte and gametophyte phase. Ferns have been used for a variety of purposes throughout human history, including as a source of food, medicine, and decoration.",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%209.53.06%E2%80%AFAM.png?alt=media&token=bec739c9-d595-4f45-ab2a-0b823b7eaec5",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Green Ferns",
      "id": "wUDQoTyabTCS0uTPjMpLwqerqwerqwe"
    },
    {
      "tags": [
          "Ferns",
          "Green",
          "Nature",
          "Plant",
          "Spores"
      ],
      "description": "Ferns are a group of ancient plants that have been around for over 360 million years, predating the dinosaurs. They are known for their distinctive fronds, which can range in size from just a few inches to over 30 feet long. Ferns are found in a wide range of environments, from damp forests and swamps to arid deserts and high-altitude mountain ranges. They reproduce via spores rather than seeds, and have a unique life cycle that involves alternating between a sporophyte and gametophyte phase. Ferns have been used for a variety of purposes throughout human history, including as a source of food, medicine, and decoration.",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%208.47.39%E2%80%AFAM.png?alt=media&token=62ee9b1a-9ce7-4e59-94b5-8a3672ed38c3",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Green Ferns",
      "id": "wUDQoTyabTCS0uTPjMpLrtyrteyiutyuo"
    },
    {
      "tags": [
          "Marketing",
          "Sales",
          "Entrepreneurship"
      ],
      "description": "Ferns are a group of ancient plants that have been around for over 360 million years, predating the dinosaurs. They are known for their distinctive fronds, which can range in size from just a few inches to over 30 feet long. Ferns are found in a wide range of environments, from damp forests and swamps to arid deserts and high-altitude mountain ranges. They reproduce via spores rather than seeds, and have a unique life cycle that involves alternating between a sporophyte and gametophyte phase. Ferns have been used for a variety of purposes throughout human history, including as a source of food, medicine, and decoration.",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%209.47.24%E2%80%AFAM.png?alt=media&token=20fad1bf-9b5b-4c5d-ab46-026b8c356c62",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Getting nonstop sales!",
      "id": "wUDQoTyabTCS0uTPjMpLghjbvnmnc"
    },
    {
      "tags": [
          "Marketing",
          "Sales",
          "Entrepreneurship"
      ],
      "description": "Ferns are a group of ancient plants that have been around for over 360 million years, predating the dinosaurs. They are known for their distinctive fronds, which can range in size from just a few inches to over 30 feet long. Ferns are found in a wide range of environments, from damp forests and swamps to arid deserts and high-altitude mountain ranges. They reproduce via spores rather than seeds, and have a unique life cycle that involves alternating between a sporophyte and gametophyte phase. Ferns have been used for a variety of purposes throughout human history, including as a source of food, medicine, and decoration.",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%209.53.25%E2%80%AFAM.png?alt=media&token=8d90a8de-b6fb-4927-ade4-2067ed3b308f",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Getting nonstop sales!",
      "id": "wUDQoTyabTCS0uTPjMpLasdfaqwertyh"
    },
    {
      "tags": [
          "Marketing",
          "Sales",
          "Entrepreneurship"
      ],
      "description": "Ferns are a group of ancient plants that have been around for over 360 million years, predating the dinosaurs. They are known for their distinctive fronds, which can range in size from just a few inches to over 30 feet long. Ferns are found in a wide range of environments, from damp forests and swamps to arid deserts and high-altitude mountain ranges. They reproduce via spores rather than seeds, and have a unique life cycle that involves alternating between a sporophyte and gametophyte phase. Ferns have been used for a variety of purposes throughout human history, including as a source of food, medicine, and decoration.",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%209.47.24%E2%80%AFAM.png?alt=media&token=20fad1bf-9b5b-4c5d-ab46-026b8c356c62",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Getting nonstop sales!",
      "id": "wUDQoTyabTCS0uTPjMpLuyiotbncv"
    },
    {
      "tags": [
          "Ferns",
          "Green",
          "Nature",
          "Plant",
          "Spores"
      ],
      "description": "Ferns are a group of ancient plants that have been around for over 360 million years, predating the dinosaurs. They are known for their distinctive fronds, which can range in size from just a few inches to over 30 feet long. Ferns are found in a wide range of environments, from damp forests and swamps to arid deserts and high-altitude mountain ranges. They reproduce via spores rather than seeds, and have a unique life cycle that involves alternating between a sporophyte and gametophyte phase. Ferns have been used for a variety of purposes throughout human history, including as a source of food, medicine, and decoration.",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%208.47.52%E2%80%AFAM.png?alt=media&token=1dc86dd3-ba75-4b70-a8a3-3b64a9fd1c12",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Green Ferns",
      "id": "wUDQoTyabTCS0uTPjMpLdsfgawertyh"
    },
    {
      "tags": [
          "Ferns",
          "Green",
          "Nature",
          "Plant",
          "Spores"
      ],
      "description": "Ferns are a group of ancient plants that have been around for over 360 million years, predating the dinosaurs. They are known for their distinctive fronds, which can range in size from just a few inches to over 30 feet long. Ferns are found in a wide range of environments, from damp forests and swamps to arid deserts and high-altitude mountain ranges. They reproduce via spores rather than seeds, and have a unique life cycle that involves alternating between a sporophyte and gametophyte phase. Ferns have been used for a variety of purposes throughout human history, including as a source of food, medicine, and decoration.",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%209.53.42%E2%80%AFAM.png?alt=media&token=13c8e4ce-3f3e-44d4-821f-0ba758fb3e7f",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Green Ferns",
      "id": "wUDQoTyabTCS0uTPjMpLdryertfghj"
    },
    {
      "tags": [
          "Ferns",
          "Green",
          "Nature",
          "Plant",
          "Spores"
      ],
      "description": "Ferns are a group of ancient plants that have been around for over 360 million years, predating the dinosaurs. They are known for their distinctive fronds, which can range in size from just a few inches to over 30 feet long. Ferns are found in a wide range of environments, from damp forests and swamps to arid deserts and high-altitude mountain ranges. They reproduce via spores rather than seeds, and have a unique life cycle that involves alternating between a sporophyte and gametophyte phase. Ferns have been used for a variety of purposes throughout human history, including as a source of food, medicine, and decoration.",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%209.50.19%E2%80%AFAM.png?alt=media&token=96815ab2-e54b-454f-a8eb-595306aef990",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Green Ferns",
      "id": "wUDQoTyabTCS0uTPjMpLdhgsrt"
    },
    {
      "tags": [
          "Ferns",
          "Green",
          "Nature",
          "Plant",
          "Spores"
      ],
      "description": "Ferns are a group of ancient plants that have been around for over 360 million years, predating the dinosaurs. They are known for their distinctive fronds, which can range in size from just a few inches to over 30 feet long. Ferns are found in a wide range of environments, from damp forests and swamps to arid deserts and high-altitude mountain ranges. They reproduce via spores rather than seeds, and have a unique life cycle that involves alternating between a sporophyte and gametophyte phase. Ferns have been used for a variety of purposes throughout human history, including as a source of food, medicine, and decoration.",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%208.47.57%E2%80%AFAM.png?alt=media&token=e203b34c-6774-49f8-960a-b27e939be1e7",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Green Ferns",
      "id": "wUDQoTyabTCS0uTPjMpLsdaafafjghk"
    },
    {
      "tags": [
          "Ferns",
          "Green",
          "Nature",
          "Plant",
          "Spores"
      ],
      "description": "Ferns are a group of ancient plants that have been around for over 360 million years, predating the dinosaurs. They are known for their distinctive fronds, which can range in size from just a few inches to over 30 feet long. Ferns are found in a wide range of environments, from damp forests and swamps to arid deserts and high-altitude mountain ranges. They reproduce via spores rather than seeds, and have a unique life cycle that involves alternating between a sporophyte and gametophyte phase. Ferns have been used for a variety of purposes throughout human history, including as a source of food, medicine, and decoration.",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%209.55.03%E2%80%AFAM.png?alt=media&token=c92b3ce4-4fab-4563-96fd-cd837346ce3b",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Green Ferns",
      "id": "wUDQoTyabTCS0uTPjMpLasdyui"
    },
    {
      "tags": [
          "Ferns",
          "Green",
          "Nature",
          "Plant",
          "Spores"
      ],
      "description": "Ferns are a group of ancient plants that have been around for over 360 million years, predating the dinosaurs. They are known for their distinctive fronds, which can range in size from just a few inches to over 30 feet long. Ferns are found in a wide range of environments, from damp forests and swamps to arid deserts and high-altitude mountain ranges. They reproduce via spores rather than seeds, and have a unique life cycle that involves alternating between a sporophyte and gametophyte phase. Ferns have been used for a variety of purposes throughout human history, including as a source of food, medicine, and decoration.",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%208.48.03%E2%80%AFAM.png?alt=media&token=72038c8b-2275-4806-8b7a-8b0afd9178a8",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Green Ferns",
      "id": "wUDQoTyabTCS0uTPjMpLasetnmfg"
    },
    {
      "tags": [
          "Ferns",
          "Green",
          "Nature",
          "Plant",
          "Spores"
      ],
      "description": "Ferns are a group of ancient plants that have been around for over 360 million years, predating the dinosaurs. They are known for their distinctive fronds, which can range in size from just a few inches to over 30 feet long. Ferns are found in a wide range of environments, from damp forests and swamps to arid deserts and high-altitude mountain ranges. They reproduce via spores rather than seeds, and have a unique life cycle that involves alternating between a sporophyte and gametophyte phase. Ferns have been used for a variety of purposes throughout human history, including as a source of food, medicine, and decoration.",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%208.48.10%E2%80%AFAM.png?alt=media&token=cf1ac8d3-a46c-45fa-b727-8ea7ab24cee3",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Green Ferns",
      "id": "wUDQoTyabTCS0uTPjMpLuiytzcvz"
    },
    {
      "tags": [
          "Ferns",
          "Green",
          "Nature",
          "Plant",
          "Spores"
      ],
      "description": "Ferns are a group of ancient plants that have been around for over 360 million years, predating the dinosaurs. They are known for their distinctive fronds, which can range in size from just a few inches to over 30 feet long. Ferns are found in a wide range of environments, from damp forests and swamps to arid deserts and high-altitude mountain ranges. They reproduce via spores rather than seeds, and have a unique life cycle that involves alternating between a sporophyte and gametophyte phase. Ferns have been used for a variety of purposes throughout human history, including as a source of food, medicine, and decoration.",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%209.50.19%E2%80%AFAM.png?alt=media&token=96815ab2-e54b-454f-a8eb-595306aef990",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Green Ferns",
      "id": "wUDQoTyabTCS0uTPjMpLtwedfbj"
    },
    {
      "tags": [
          "Marketing",
          "Sales",
          "Entrepreneurship"
      ],
      "description": "Ferns are a group of ancient plants that have been around for over 360 million years, predating the dinosaurs. They are known for their distinctive fronds, which can range in size from just a few inches to over 30 feet long. Ferns are found in a wide range of environments, from damp forests and swamps to arid deserts and high-altitude mountain ranges. They reproduce via spores rather than seeds, and have a unique life cycle that involves alternating between a sporophyte and gametophyte phase. Ferns have been used for a variety of purposes throughout human history, including as a source of food, medicine, and decoration.",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%208.47.24%E2%80%AFAM.png?alt=media&token=7f501d93-3026-41d7-8cd7-88c68b37beec",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Getting nonstop sales!",
      "id": "wUDQoTyabTCS0uTPjMpLuiodxvcbdf"
    },
    {
      "tags": [
          "Marketing",
          "Sales",
          "Entrepreneurship"
      ],
      "description": "Ferns are a group of ancient plants that have been around for over 360 million years, predating the dinosaurs. They are known for their distinctive fronds, which can range in size from just a few inches to over 30 feet long. Ferns are found in a wide range of environments, from damp forests and swamps to arid deserts and high-altitude mountain ranges. They reproduce via spores rather than seeds, and have a unique life cycle that involves alternating between a sporophyte and gametophyte phase. Ferns have been used for a variety of purposes throughout human history, including as a source of food, medicine, and decoration.",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%209.47.24%E2%80%AFAM.png?alt=media&token=20fad1bf-9b5b-4c5d-ab46-026b8c356c62",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Getting nonstop sales!",
      "id": "wUDQoTyabTCS0uTPjMpLioljhjkkgc"
    },
    {
      "tags": [
          "Ferns",
          "Green",
          "Nature",
          "Plant",
          "Spores"
      ],
      "description": "Ferns are a group of ancient plants that have been around for over 360 million years, predating the dinosaurs. They are known for their distinctive fronds, which can range in size from just a few inches to over 30 feet long. Ferns are found in a wide range of environments, from damp forests and swamps to arid deserts and high-altitude mountain ranges. They reproduce via spores rather than seeds, and have a unique life cycle that involves alternating between a sporophyte and gametophyte phase. Ferns have been used for a variety of purposes throughout human history, including as a source of food, medicine, and decoration.",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%208.47.29%E2%80%AFAM.png?alt=media&token=4c735944-c161-4f53-9ee5-f87fc8be85c1",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Green Ferns",
      "id": "wUDQoTyabTCS0uTPjMpLpoiewyrt"
    },
    {
      "tags": [
          "Ferns",
          "Green",
          "Nature",
          "Plant",
          "Spores"
      ],
      "description": "Ferns are a group of ancient plants that have been around for over 360 million years, predating the dinosaurs. They are known for their distinctive fronds, which can range in size from just a few inches to over 30 feet long. Ferns are found in a wide range of environments, from damp forests and swamps to arid deserts and high-altitude mountain ranges. They reproduce via spores rather than seeds, and have a unique life cycle that involves alternating between a sporophyte and gametophyte phase. Ferns have been used for a variety of purposes throughout human history, including as a source of food, medicine, and decoration.",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%209.53.06%E2%80%AFAM.png?alt=media&token=bec739c9-d595-4f45-ab2a-0b823b7eaec5",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Green Ferns",
      "id": "wUDQoTyabTCS0uTPjMpLaskldfjhre"
    },
    {
      "tags": [
          "Ferns",
          "Green",
          "Nature",
          "Plant",
          "Spores"
      ],
      "description": "Ferns are a group of ancient plants that have been around for over 360 million years, predating the dinosaurs. They are known for their distinctive fronds, which can range in size from just a few inches to over 30 feet long. Ferns are found in a wide range of environments, from damp forests and swamps to arid deserts and high-altitude mountain ranges. They reproduce via spores rather than seeds, and have a unique life cycle that involves alternating between a sporophyte and gametophyte phase. Ferns have been used for a variety of purposes throughout human history, including as a source of food, medicine, and decoration.",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%208.47.39%E2%80%AFAM.png?alt=media&token=62ee9b1a-9ce7-4e59-94b5-8a3672ed38c3",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Green Ferns",
      "id": "wUDQoTyabTCS0uTPjMpLtyuirty"
    },
    {
      "tags": [
          "Marketing",
          "Sales",
          "Entrepreneurship"
      ],
      "description": "Ferns are a group of ancient plants that have been around for over 360 million years, predating the dinosaurs. They are known for their distinctive fronds, which can range in size from just a few inches to over 30 feet long. Ferns are found in a wide range of environments, from damp forests and swamps to arid deserts and high-altitude mountain ranges. They reproduce via spores rather than seeds, and have a unique life cycle that involves alternating between a sporophyte and gametophyte phase. Ferns have been used for a variety of purposes throughout human history, including as a source of food, medicine, and decoration.",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%209.47.24%E2%80%AFAM.png?alt=media&token=20fad1bf-9b5b-4c5d-ab46-026b8c356c62",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Getting nonstop sales!",
      "id": "wUDQoTyabTCS0uTPjMpLxcvbxcvb"
    },
    {
      "tags": [
          "Marketing",
          "Sales",
          "Entrepreneurship"
      ],
      "description": "Ferns are a group of ancient plants that have been around for over 360 million years, predating the dinosaurs. They are known for their distinctive fronds, which can range in size from just a few inches to over 30 feet long. Ferns are found in a wide range of environments, from damp forests and swamps to arid deserts and high-altitude mountain ranges. They reproduce via spores rather than seeds, and have a unique life cycle that involves alternating between a sporophyte and gametophyte phase. Ferns have been used for a variety of purposes throughout human history, including as a source of food, medicine, and decoration.",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%209.53.25%E2%80%AFAM.png?alt=media&token=8d90a8de-b6fb-4927-ade4-2067ed3b308f",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Getting nonstop sales!",
      "id": "wUDQoTyabTCS0uTPjMpLfghvbcn"
    },
    {
      "tags": [
          "Marketing",
          "Sales",
          "Entrepreneurship"
      ],
      "description": "Ferns are a group of ancient plants that have been around for over 360 million years, predating the dinosaurs. They are known for their distinctive fronds, which can range in size from just a few inches to over 30 feet long. Ferns are found in a wide range of environments, from damp forests and swamps to arid deserts and high-altitude mountain ranges. They reproduce via spores rather than seeds, and have a unique life cycle that involves alternating between a sporophyte and gametophyte phase. Ferns have been used for a variety of purposes throughout human history, including as a source of food, medicine, and decoration.",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%209.47.24%E2%80%AFAM.png?alt=media&token=20fad1bf-9b5b-4c5d-ab46-026b8c356c62",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Getting nonstop sales!",
      "id": "wUDQoTyabTCS0uTPjMpLghjtio"
    },
    {
      "tags": [
          "Ferns",
          "Green",
          "Nature",
          "Plant",
          "Spores"
      ],
      "description": "Ferns are a group of ancient plants that have been around for over 360 million years, predating the dinosaurs. They are known for their distinctive fronds, which can range in size from just a few inches to over 30 feet long. Ferns are found in a wide range of environments, from damp forests and swamps to arid deserts and high-altitude mountain ranges. They reproduce via spores rather than seeds, and have a unique life cycle that involves alternating between a sporophyte and gametophyte phase. Ferns have been used for a variety of purposes throughout human history, including as a source of food, medicine, and decoration.",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%208.47.52%E2%80%AFAM.png?alt=media&token=1dc86dd3-ba75-4b70-a8a3-3b64a9fd1c12",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Green Ferns",
      "id": "wUDQoTyabTCS0uTPjMpLwersdfg"
    },
    {
      "tags": [
          "Ferns",
          "Green",
          "Nature",
          "Plant",
          "Spores"
      ],
      "description": "Ferns are a group of ancient plants that have been around for over 360 million years, predating the dinosaurs. They are known for their distinctive fronds, which can range in size from just a few inches to over 30 feet long. Ferns are found in a wide range of environments, from damp forests and swamps to arid deserts and high-altitude mountain ranges. They reproduce via spores rather than seeds, and have a unique life cycle that involves alternating between a sporophyte and gametophyte phase. Ferns have been used for a variety of purposes throughout human history, including as a source of food, medicine, and decoration.",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%209.53.42%E2%80%AFAM.png?alt=media&token=13c8e4ce-3f3e-44d4-821f-0ba758fb3e7f",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Green Ferns",
      "id": "wUDQoTyabTCS0uTPjMpLdsfhtyie"
    },
    {
      "tags": [
          "Ferns",
          "Green",
          "Nature",
          "Plant",
          "Spores"
      ],
      "description": "Ferns are a group of ancient plants that have been around for over 360 million years, predating the dinosaurs. They are known for their distinctive fronds, which can range in size from just a few inches to over 30 feet long. Ferns are found in a wide range of environments, from damp forests and swamps to arid deserts and high-altitude mountain ranges. They reproduce via spores rather than seeds, and have a unique life cycle that involves alternating between a sporophyte and gametophyte phase. Ferns have been used for a variety of purposes throughout human history, including as a source of food, medicine, and decoration.",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%209.50.19%E2%80%AFAM.png?alt=media&token=96815ab2-e54b-454f-a8eb-595306aef990",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Green Ferns",
      "id": "wUDQoTyabTCS0uTPjMpLfghdfghdfgh"
    },
    {
      "tags": [
          "Ferns",
          "Green",
          "Nature",
          "Plant",
          "Spores"
      ],
      "description": "Ferns are a group of ancient plants that have been around for over 360 million years, predating the dinosaurs. They are known for their distinctive fronds, which can range in size from just a few inches to over 30 feet long. Ferns are found in a wide range of environments, from damp forests and swamps to arid deserts and high-altitude mountain ranges. They reproduce via spores rather than seeds, and have a unique life cycle that involves alternating between a sporophyte and gametophyte phase. Ferns have been used for a variety of purposes throughout human history, including as a source of food, medicine, and decoration.",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%208.47.57%E2%80%AFAM.png?alt=media&token=e203b34c-6774-49f8-960a-b27e939be1e7",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Green Ferns",
      "id": "wUDQoTyabTCS0uTPjMpLhjkyuity"
    },
    {
      "tags": [
          "Ferns",
          "Green",
          "Nature",
          "Plant",
          "Spores"
      ],
      "description": "Ferns are a group of ancient plants that have been around for over 360 million years, predating the dinosaurs. They are known for their distinctive fronds, which can range in size from just a few inches to over 30 feet long. Ferns are found in a wide range of environments, from damp forests and swamps to arid deserts and high-altitude mountain ranges. They reproduce via spores rather than seeds, and have a unique life cycle that involves alternating between a sporophyte and gametophyte phase. Ferns have been used for a variety of purposes throughout human history, including as a source of food, medicine, and decoration.",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%209.55.03%E2%80%AFAM.png?alt=media&token=c92b3ce4-4fab-4563-96fd-cd837346ce3b",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Green Ferns",
      "id": "wUDQoTyabTCS0uTPjMpLcZxczsdf"
    },
    {
      "tags": [
          "Ferns",
          "Green",
          "Nature",
          "Plant",
          "Spores"
      ],
      "description": "Ferns are a group of ancient plants that have been around for over 360 million years, predating the dinosaurs. They are known for their distinctive fronds, which can range in size from just a few inches to over 30 feet long. Ferns are found in a wide range of environments, from damp forests and swamps to arid deserts and high-altitude mountain ranges. They reproduce via spores rather than seeds, and have a unique life cycle that involves alternating between a sporophyte and gametophyte phase. Ferns have been used for a variety of purposes throughout human history, including as a source of food, medicine, and decoration.",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%208.48.03%E2%80%AFAM.png?alt=media&token=72038c8b-2275-4806-8b7a-8b0afd9178a8",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Green Ferns",
      "id": "wUDQoTyabTCS0uTPjMpLzxcsdfa"
    },
    {
      "tags": [
          "Ferns",
          "Green",
          "Nature",
          "Plant",
          "Spores"
      ],
      "description": "Ferns are a group of ancient plants that have been around for over 360 million years, predating the dinosaurs. They are known for their distinctive fronds, which can range in size from just a few inches to over 30 feet long. Ferns are found in a wide range of environments, from damp forests and swamps to arid deserts and high-altitude mountain ranges. They reproduce via spores rather than seeds, and have a unique life cycle that involves alternating between a sporophyte and gametophyte phase. Ferns have been used for a variety of purposes throughout human history, including as a source of food, medicine, and decoration.",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%208.48.10%E2%80%AFAM.png?alt=media&token=cf1ac8d3-a46c-45fa-b727-8ea7ab24cee3",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Green Ferns",
      "id": "wUDQoTyabTCS0uTPjMpLfthdfgcvb"
    },
    {
      "tags": [
          "Ferns",
          "Green",
          "Nature",
          "Plant",
          "Spores"
      ],
      "description": "Ferns are a group of ancient plants that have been around for over 360 million years, predating the dinosaurs. They are known for their distinctive fronds, which can range in size from just a few inches to over 30 feet long. Ferns are found in a wide range of environments, from damp forests and swamps to arid deserts and high-altitude mountain ranges. They reproduce via spores rather than seeds, and have a unique life cycle that involves alternating between a sporophyte and gametophyte phase. Ferns have been used for a variety of purposes throughout human history, including as a source of food, medicine, and decoration.",
      "pin_size": "medium",
      "img_url": "https://firebasestorage.googleapis.com/v0/b/fakepinterest-fa0a4.appspot.com/o/Screenshot%202024-03-21%20at%209.50.19%E2%80%AFAM.png?alt=media&token=96815ab2-e54b-454f-a8eb-595306aef990",
      "author": "Patryk",
      "board": "default",
      "destination": "www.green.com",
      "title": "Green Ferns",
      "id": "wUDQoTyabTCS0uTPjMpLvxbxdftyer"
    },
  ];
  // try {
  //   await getDocs(collection(firestore, 'pins')).then((querySnapshot) => {
  //     const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  //     newData.forEach((p) => {
  //       console.log("🚀 ~ newData.forEach ~ p:", p)
  //       fetchedPins.push(p);
  //     });
  //   });
  // } catch (error) {
  //   console.log(error);
  // }
  // return fetchedPins;
}

export async function savePinBackend(e, users_data, imageFile) {
  let doc_snap;
  e.preventDefault();
  try {
    const docRef = await addDoc(collection(firestore, 'pins'), {
      ...users_data,
      img_url: '',
    });
    const storage = getStorage();
    //todo: assigning docRef.id isn't necassary, i can upload the img_file in another async call and only upload the pin once i have image URL
    const storageRef = ref(storage, docRef.id);
    let compressedImg = await compressImage(imageFile);
    await uploadBytes(storageRef, compressedImg)
      .then((snapshot) => {
        console.log('Uploaded image for pin: ' + docRef.id);
        getDownloadURL(snapshot.ref)
          .then((url) => {
            updateDoc(docRef, { img_url: url })
              .then(() => {
                console.log('Update of pin sucessful!');
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
    doc_snap = await getDoc(docRef);
    return doc_snap.data();
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

async function compressImage(imageFile) {
  let compressedFile;
  const options = {
    maxSizeMB: 1,
  };
  try {
    compressedFile = await imageCompression(imageFile, options);
  } catch (error) {
    console.log(error);
  }
  return compressedFile;
}

export async function deletePinBackend(pin_details) {
  const storage = getStorage();
  const pinRef = ref(storage, pin_details.id);

  try {
    await deleteDoc(doc(firestore, 'pins', pin_details.id)).then(
      deleteObject(pinRef)
        .then(() => {
          console.log('File deleted successfully');
        })
        .catch((e) => {
          console.log('Uh-oh, an error occurred!');
        })
    );
  } catch (e) {
    console.error('Error deleting document: ', e);
  }
}

export async function updatePinBackend(e, users_data) {
  //placeholer
}
