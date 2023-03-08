import {listTags} from "./tags";

export const recipes = [
    {
        "id": 1,
        "name": "Pasta with Marinara Sauce",
        "servings": 4,
        "prep_time": "10 minutes",
        "cook_time": "20 minutes",
        "ingredients": [
            {
                "name": "dried pasta",
                "amount": "1 pound"
            },
            {
                "name": "olive oil",
                "amount": "2 tablespoons"
            },
            {
                "name": "onion",
                "amount": "1, chopped"
            },
            {
                "name": "garlic",
                "amount": "4 cloves, minced"
            },
            {
                "name": "canned diced tomatoes",
                "amount": "28 ounces"
            },
            {
                "name": "basil leaves",
                "amount": "1/4 cup, chopped"
            },
            {
                "name": "salt",
                "amount": "1 teaspoon"
            },
            {
                "name": "black pepper",
                "amount": "1/2 teaspoon"
            },
            {
                "name": "red pepper flakes",
                "amount": "1/2 teaspoon"
            }
        ],
        "hints": [
            "Use high-quality canned tomatoes for the best flavor in the sauce.",
            "Adding a splash of red wine can enhance the flavor of the sauce.",
            "Use freshly grated parmesan cheese for the best flavor.",
            "Serve the pasta with a simple green salad for a complete meal."
        ],
        "instructions": [
            "Cook the pasta according to the package instructions until al dente.",
            "Meanwhile, heat the olive oil in a large saucepan over medium heat.",
            "Add the onion and cook until softened, about 5 minutes.",
            "Add the garlic and cook for another minute.",
            "Add the diced tomatoes, basil, salt, black pepper, and red pepper flakes.",
            "Bring the sauce to a boil, then reduce the heat and simmer for 10 minutes.",
            "Drain the pasta and return it to the pot.",
            "Add the sauce to the pasta and toss to combine.",
            "Serve the pasta with freshly grated parmesan cheese, if desired."
        ],
        "image": "1_Pasta_with_marinara_sauce.png"
    },
    {
        "id": 2,
        "name": "Grilled Cheese Sandwich",
        "servings": 1,
        "prep_time": "5 minutes",
        "cook_time": "5 minutes",
        "ingredients": [
            {
                "name": "bread",
                "amount": "2 slices"
            },
            {
                "name": "cheese",
                "amount": "2 slices"
            },
            {
                "name": "butter",
                "amount": "1 tablespoon"
            }
        ],
        "hints": [
            "Use a good quality bread that will hold up to the grilling process.",
            "Use a cheese with a good melting consistency, such as cheddar, mozzarella, or Swiss.",
            "Butter both sides of the bread to ensure even cooking and a crispy exterior.",
            "Press down on the sandwich with a spatula as it cooks to ensure even melting and browning."
        ],
        "instructions": [
            "Butter one side of each slice of bread.",
            "Place a slice of cheese between the two slices of bread, with the buttered sides facing out.",
            "Heat a large skillet over medium heat.",
            "Place the sandwich in the skillet and cook until the bread is golden brown and the cheese is melted, about 2-3 minutes per side.",
            "Serve the sandwich hot, cut in half if desired."
        ],
        "image": "2_Grilled_cheese_sandwich.png"
    },
    {
        "id": 3,
        "name": "Scrambled Eggs",
        "ingredients": [
            {
                "name": "eggs",
                "amount": "2"
            },
            {
                "name": "milk",
                "amount": "2 tablespoon"
            },
            {
                "name": "butter",
                "amount": "1 tablespoon"
            },
            {
                "name": "salt",
                "amount": "1/4 tablespoon"
            }
        ],
        "instructions": [
            "Beat the eggs, milk, salt, and pepper in a small bowl with a fork or whisk until well combined.",
            "Heat the butter or oil in a non-stick pan over medium heat.",
            "Pour in the egg mixture and cook, stirring gently with a spatula, until the eggs are just set but still moist, 2 to 3 minutes.",
            "Remove the pan from heat and let the eggs sit for a few seconds to finish cooking before serving."
        ],
        "hints": [
            "Add a pinch of grated cheese or herbs for extra flavor.",
            "Try different variations, such as adding diced vegetables or ham to the eggs.",
            "For fluffier eggs, beat in a little baking powder before cooking.",
            "If you prefer a firmer texture, cook the eggs over low heat and stir them less frequently."
        ],
        "serving_size": "1 serving",
        "image": "3_Scrambled_eggs.png"
    },
    {
        "id": 4,
        "name": "Baked Salmon",
        "ingredients": [
            {
                "name": "Salmon fillet",
                "amount": "1 lb"
            },
            {
                "name": "Lemon",
                "amount": "1, sliced"
            },
            {
                "name": "Olive oil",
                "amount": "2 tablespoons"
            },
            {
                "name": "Garlic",
                "amount": "3 cloves, minced"
            },
            {
                "name": "Dry white wine",
                "amount": "1/4 cup"
            },
            {
                "name": "Salt",
                "amount": "1 teaspoon"
            },
            {
                "name": "Pepper",
                "amount": "1/2 teaspoon"
            }
        ],
        "instructions": [
            "Preheat oven to 400°F.",
            "Line a baking dish with aluminum foil.",
            "Arrange the salmon fillet in the dish, skin side down.",
            "Top with lemon slices.",
            "In a small bowl, mix together olive oil, garlic, wine, salt, and pepper.",
            "Pour the mixture over the salmon.",
            "Bake for 15-20 minutes, until salmon is fully cooked and opaque.",
            "Serve hot with lemon wedges."
        ],
        "hints": [
            "Try different spices and seasonings, such as cumin, paprika, or garlic powder.",
            "For a crispy skin, place the salmon skin-side down on the baking sheet.",
            "You can also wrap the salmon in foil to create a moist, steaming environment and enhance its flavor.",
            "To check if the salmon is done, insert a fork into the thickest part and twist gently. If it flakes easily, it is ready."
        ],
        "serving_size": "4 servings",
        "image": "4_Baked_salmon.png"
    },
    {
        "id": 5,
        "name": "Tacos",
        "ingredients": [
            {
                "name": "Ground beef",
                "amount": "1 lb"
            },
            {
                "name": "Taco seasoning",
                "amount": "1 packet"
            },
            {
                "name": "Water",
                "amount": "1/4 cup"
            },
            {
                "name": "Taco shells",
                "amount": "8-10"
            },
            {
                "name": "Shredded lettuce",
                "amount": "1 cup"
            },
            {
                "name": "Shredded cheddar cheese",
                "amount": "1 cup"
            },
            {
                "name": "Diced tomatoes",
                "amount": "1 cup"
            },
            {
                "name": "Sour cream",
                "amount": "1/2 cup"
            }
        ],
        "instructions": [
            "In a large pan, cook ground beef over medium heat until fully browned.",
            "Stir in taco seasoning and water.",
            "Simmer for 5 minutes.",
            "Warm the taco shells in the oven or on a stovetop griddle.",
            "Fill each taco shell with beef mixture, lettuce, cheese, tomatoes, and a dollop of sour cream.",
            "Serve immediately."
        ],
        "hints": [
            "Warm the taco shells in the oven or on a dry pan before filling them to prevent breaking.",
            "Add additional toppings, such as jalapenos, onions, or guacamole, to customize your tacos.",
            "Try using different meats, such as pork or shrimp, for a different flavor profile.",
            "For a healthier option, use whole wheat taco shells and opt for a lower-fat meat."
        ],
        "serving_size": "4-6 servings",
        "image": "5_Tacos.png"
    },
    {
        "id": 6,
        "name": "Fried Rice",
        "ingredients": [
            {
                "name": "Long grain white rice",
                "amount": "2 cups"
            },
            {
                "name": "Water",
                "amount": "2 1/2 cups"
            },
            {
                "name": "Vegetable oil",
                "amount": "2 tablespoons"
            },
            {
                "name": "Eggs",
                "amount": "2, beaten"
            },
            {
                "name": "Garlic",
                "amount": "3 cloves, minced"
            },
            {
                "name": "Carrots",
                "amount": "1 cup, diced"
            },
            {
                "name": "Peas",
                "amount": "1 cup"
            },
            {
                "name": "Soy sauce",
                "amount": "2 tablespoons"
            },
            {
                "name": "Green onions",
                "amount": "1/4 cup, sliced"
            }
        ],
        "instructions": [
            "Cook the rice in a pot with water according to package instructions.",
            "Once cooked, spread the rice out on a baking sheet to cool.",
            "In a large pan or wok, heat oil over medium heat.",
            "Add beaten eggs to the pan and scramble until fully cooked.",
            "Remove the eggs from the pan and set aside.",
            "Add garlic and carrots to the pan and stir-fry for 2-3 minutes.",
            "Add peas and rice to the pan, along with the scrambled eggs.",
            "Stir-fry everything together until fully combined and heated through.",
            "Stir in soy sauce and green onions.",
            "Serve hot."
        ],
        "hints": [
            "Use leftover rice for best results as fresh rice can get mushy.",
            "For extra flavor, add diced ham, chicken, or shrimp.",
            "Try different seasonings, such as hoisin sauce, oyster sauce, or sesame oil.",
            "To make the dish vegetarian, use vegetable broth instead of soy sauce and skip the eggs."
        ],
        "serving_size": "4 servings",
        "image": "6_Fried_rice.png"
    },
    {
        "id": 7,
        "name": "Chicken Parmesan",
        "ingredients": [
            {
                "name": "Boneless, skinless chicken breasts",
                "amount": "4"
            },
            {
                "name": "All-purpose flour",
                "amount": "1 cup"
            },
            {
                "name": "Eggs",
                "amount": "2, beaten"
            },
            {
                "name": "Breadcrumbs",
                "amount": "1 cup"
            },
            {
                "name": "Grated Parmesan cheese",
                "amount": "1/2 cup"
            },
            {
                "name": "Salt",
                "amount": "1 teaspoon"
            },
            {
                "name": "Black pepper",
                "amount": "1/2 teaspoon"
            },
            {
                "name": "Olive oil",
                "amount": "1/4 cup"
            },
            {
                "name": "Marinara sauce",
                "amount": "1 cup"
            },
            {
                "name": "Mozzarella cheese",
                "amount": "1 cup, shredded"
            },
            {
                "name": "Fresh basil",
                "amount": "1/4 cup, chopped"
            }
        ],
        "instructions": [
            "Preheat oven to 375°F (190°C).",
            "Set up a breading station with three shallow dishes: one with flour, one with beaten eggs, and one with breadcrumbs mixed with Parmesan cheese, salt, and pepper.",
            "Dredge each chicken breast in flour, then dip in beaten eggs, then coat in breadcrumb mixture.",
            "In a large pan, heat olive oil over medium heat.",
            "Add breaded chicken breasts to the pan and cook until browned on both sides, about 4-5 minutes per side.",
            "Remove chicken from pan and place in a baking dish.",
            "Spoon marinara sauce over chicken breasts, then sprinkle with mozzarella cheese.",
            "Bake in preheated oven for 15-20 minutes, or until cheese is melted and bubbly.",
            "Garnish with fresh basil before serving."
        ],
        "hints": [
            "For extra flavor, add chopped basil or parsley to the breadcrumb mixture.",
            "Use a meat mallet to pound the chicken breasts to an even thickness for even cooking.",
            "Try serving with spaghetti or roasted vegetables on the side.",
            "For a lighter version, bake the chicken instead of frying it and use a lighter cheese, such as part-skim mozzarella."
        ],
        "serving_size": "4 servings",
        "image": "7_Chicken_parmesan.png"
    },
    {
        "id": 8,
        "name": "Chili",
        "ingredients": [
            {
                "name": "Ground beef",
                "amount": "1 lb"
            },
            {
                "name": "Onion",
                "amount": "1, chopped"
            },
            {
                "name": "Green bell pepper",
                "amount": "1, chopped"
            },
            {
                "name": "Garlic",
                "amount": "3 cloves, minced"
            },
            {
                "name": "Tomato sauce",
                "amount": "1 can (15 oz)"
            },
            {
                "name": "Tomato paste",
                "amount": "1 can (6 oz)"
            },
            {
                "name": "Kidney beans",
                "amount": "1 can (15 oz), drained and rinsed"
            },
            {
                "name": "Chili powder",
                "amount": "2 tablespoons"
            },
            {
                "name": "Ground cumin",
                "amount": "1 teaspoon"
            },
            {
                "name": "Salt",
                "amount": "1 teaspoon"
            },
            {
                "name": "Black pepper",
                "amount": "1/2 teaspoon"
            }
        ],
        "instructions": [
            "In a large pot or Dutch oven, cook ground beef over medium heat until browned.",
            "Add onion, green bell pepper, and garlic to the pot and cook until vegetables are softened.",
            "Stir in tomato sauce, tomato paste, kidney beans, chili powder, cumin, salt, and pepper.",
            "Bring to a boil, then reduce heat and simmer for 30 minutes, stirring occasionally.",
            "Taste and adjust seasoning as needed."
        ],
        "hints": [
            "For extra flavor, try adding diced carrots, celery, or jalapeño peppers.",
            "For a thicker chili, add 1/4 cup of masa harina or cornmeal.",
            "For a vegetarian option, substitute the ground beef or turkey with crumbled tofu or seitan.",
            "Chili can also be made in a slow cooker. Simply brown the meat and vegetables and transfer to the slow cooker. Add the remaining ingredients and cook on low for 6-8 hours or on high for 3-4 hours."
        ],
        "serving_size": "6 servings",
        "image": "8_Chili.png"
    },
    {
        "id": 9,
        "name": "Meatloaf",
        "ingredients": [
            {
                "name": "Ground beef",
                "amount": "1 1/2 lbs"
            },
            {
                "name": "Onion",
                "amount": "1, finely chopped"
            },
            {
                "name": "Garlic",
                "amount": "2 cloves, minced"
            },
            {
                "name": "Breadcrumbs",
                "amount": "1 cup"
            },
            {
                "name": "Egg",
                "amount": "1, beaten"
            },
            {
                "name": "Milk",
                "amount": "1/4 cup"
            },
            {
                "name": "Ketchup",
                "amount": "1/4 cup"
            },
            {
                "name": "Worcestershire sauce",
                "amount": "1 tablespoon"
            },
            {
                "name": "Salt",
                "amount": "1 teaspoon"
            },
            {
                "name": "Black pepper",
                "amount": "1/2 teaspoon"
            }
        ],
        "instructions": [
            "Preheat oven to 350°F (180°C).",
            "In a large bowl, combine ground beef, onion, garlic, breadcrumbs, egg, milk, ketchup, Worcestershire sauce, salt, and pepper.",
            "Mix well and shape into a loaf.",
            "Place meatloaf in a 9x5-inch loaf pan.",
            "Bake for 1 hour, or until the internal temperature reaches 160°F (71°C)."
        ],
        "hints": [
            "For extra flavor, try adding diced mushrooms or bell peppers.",
            "For a more moist meatloaf, add 1/4 cup of grated parmesan cheese or 1/4 cup of diced ham.",
            "Let the meatloaf rest for 10 minutes before slicing to allow the juices to redistribute.",
            "Try serving with mashed potatoes, roasted vegetables, or a side salad."
        ],
        "serving_size": "6 servings",
        "image": "9_Meatloaf.png"
    },
    {
        "id": 10,
        "name": "Roasted Vegetables",
        "ingredients": [
            {
                "name": "Assorted vegetables",
                "amount": "4 cups, cut into bite-sized pieces (e.g. carrots, bell peppers, onion, zucchini, eggplant)"
            },
            {
                "name": "Olive oil",
                "amount": "2 tablespoons"
            },
            {
                "name": "Salt",
                "amount": "1 teaspoon"
            },
            {
                "name": "Black pepper",
                "amount": "1/2 teaspoon"
            }
        ],
        "instructions": [
            "Preheat oven to 400°F (200°C).",
            "In a large bowl, toss vegetables with olive oil, salt, and pepper.",
            "Spread vegetables in a single layer on a baking sheet.",
            "Roast for 20-25 minutes, or until vegetables are tender and browned, flipping once during cooking.",
            "Taste and adjust seasoning as needed."
        ],
        "hints": [
            "For extra flavor, try tossing the vegetables with balsamic vinegar or lemon juice before roasting.",
            "For a different flavor profile, try using different dried herbs, such as oregano or basil.",
            "Try roasting root vegetables, such as carrots, turnips, and parsnips, with a touch of honey.",
            "Try serving roasted vegetables as a side dish, in a salad, or on a sandwich."
        ],
        "serving_size": "6 servings",
        "image": "10_Roasted_vegetables.png"
    },
    {
        "id": 11,
        "name": "Stir-Fry",
        "ingredients": [
            {
                "name": "Protein",
                "amount": "1 lb, sliced (e.g. chicken, beef, tofu, shrimp)"
            },
            {
                "name": "Assorted vegetables",
                "amount": "4 cups, sliced (e.g. bell peppers, onion, carrots, broccoli, snow peas)"
            },
            {
                "name": "Garlic",
                "amount": "2 cloves, minced"
            },
            {
                "name": "Ginger",
                "amount": "1 inch, minced"
            },
            {
                "name": "Soy sauce",
                "amount": "2 tablespoons"
            },
            {
                "name": "Cornstarch",
                "amount": "1 tablespoon"
            },
            {
                "name": "Vegetable oil",
                "amount": "2 tablespoons"
            },
            {
                "name": "Rice",
                "amount": "4 cups, cooked"
            }
        ],
        "instructions": [
            "In a bowl, mix protein with 1 tablespoon cornstarch and 1 tablespoon soy sauce.",
            "In a separate bowl, mix vegetables with 1 tablespoon cornstarch and 1 tablespoon soy sauce.",
            "Heat a wok or large skillet over high heat.",
            "Add 1 tablespoon oil and swirl to coat the pan.",
            "Add protein and stir-fry for 2-3 minutes, or until browned.",
            "Remove from pan and set aside.",
            "Add 1 tablespoon oil to the pan.",
            "Add garlic, ginger, and vegetables and stir-fry for 3-4 minutes, or until vegetables are tender.",
            "Return protein to pan.",
            "Stir in remaining 1 tablespoon soy sauce and cook for 1-2 minutes, or until everything is well combined and heated through.",
            "Serve over rice."
        ],
        "hints": [
            "For extra flavor, try adding grated ginger or diced red pepper flakes.",
            "For a sweeter stir-fry, try adding a touch of honey or brown sugar.",
            "Try using different types of vegetables, such as bok choy, mushrooms, or snap peas.",
            "For a vegetarian stir-fry, try using tofu, tempeh, or seitan as the protein."
        ],
        "serving_size": "4 servings",
        "image": "11_Stir-fry.png"
    },
    {
        "id": 12,
        "name": "Caesar Salad",
        "ingredients": [
            {
                "name": "Romaine lettuce",
                "amount": "1 head, chopped"
            },
            {
                "name": "Parmesan cheese",
                "amount": "1/2 cup, grated"
            },
            {
                "name": "Croutons",
                "amount": "1 cup"
            },
            {
                "name": "Garlic",
                "amount": "2 cloves, minced"
            },
            {
                "name": "Lemon juice",
                "amount": "2 tablespoons"
            },
            {
                "name": "Dijon mustard",
                "amount": "1 teaspoon"
            },
            {
                "name": "Worcestershire sauce",
                "amount": "1 teaspoon"
            },
            {
                "name": "Anchovy paste",
                "amount": "1 teaspoon (optional)"
            },
            {
                "name": "Egg yolk",
                "amount": "1"
            },
            {
                "name": "Olive oil",
                "amount": "1/2 cup"
            },
            {
                "name": "Salt",
                "amount": "1/2 teaspoon"
            },
            {
                "name": "Black pepper",
                "amount": "1/4 teaspoon"
            }
        ],
        "instructions": [
            "In a large bowl, toss lettuce with croutons, 1/4 cup Parmesan cheese, and half of the garlic.",
            "In a separate bowl, whisk lemon juice, Dijon mustard, Worcestershire sauce, anchovy paste (if using), egg yolk, and remaining garlic.",
            "Slowly drizzle in olive oil, whisking constantly, until the dressing is emulsified.",
            "Taste and adjust seasoning with salt and pepper.",
            "Pour dressing over salad and toss to coat.",
            "Divide among plates and sprinkle with remaining 1/4 cup Parmesan cheese."
        ],
        "hints": [
            "For extra flavor, try adding cooked and diced bacon or grilled chicken.",
            "For a vegetarian option, try using nutritional yeast instead of parmesan cheese.",
            "For a gluten-free option, try using gluten-free croutons or skipping them entirely.",
            "Try using a mixture of different types of lettuce, such as Romaine, iceberg, and red leaf lettuce."
        ],
        "serving_size": "4 servings",
        "image": "12_Caesar_salad.png"
    },
    {
        "id": 13,
        "name": "Omelette",
        "ingredients": [
            {
                "name": "Eggs",
                "amount": "2"
            },
            {
                "name": "Milk",
                "amount": "2 tablespoons"
            },
            {
                "name": "Salt",
                "amount": "1/4 teaspoon"
            },
            {
                "name": "Pepper",
                "amount": "1/4 teaspoon"
            },
            {
                "name": "Butter",
                "amount": "1 tablespoon"
            },
            {
                "name": "Cheese (optional)",
                "amount": "1/4 cup, grated"
            },
            {
                "name": "Fillings (optional)",
                "amount": "1/4 cup, diced (e.g. bell pepper, onion, mushroom, ham, etc.)"
            }
        ],
        "instructions": [
            "In a bowl, beat together eggs, milk, salt, and pepper.",
            "Melt butter in a non-stick skillet over medium heat.",
            "Pour egg mixture into skillet.",
            "As the eggs begin to set, use a spatula to gently lift the edges, allowing uncooked eggs to flow underneath.",
            "When the top is nearly set, sprinkle with cheese and fillings (if using) on one half of the omelette.",
            "Use the spatula to carefully fold the other half over the filling.",
            "Cook for an additional minute, or until cheese is melted and eggs are fully set.",
            "Slide omelette onto a plate and serve immediately."
        ],
        "hints": [
            "For a fluffier omelette, try whisking in an extra tablespoon of milk or cream.",
            "For a lower calorie option, try using non-fat milk and skipping the butter.",
            "Try adding fresh herbs, such as chives or basil, for extra flavor.",
            "For a heartier omelette, try adding diced potatoes or mushrooms to the mix."
        ],
        "serving_size": "1 serving",
        "image": "13_Omelette.png"
    },
    {
        "id": 14,
        "name": "Grilled Chicken",
        "ingredients": [
            {
                "name": "Chicken breast",
                "amount": "4"
            },
            {
                "name": "Olive oil",
                "amount": "2 tablespoons"
            },
            {
                "name": "Lemon juice",
                "amount": "1/4 cup"
            },
            {
                "name": "Garlic",
                "amount": "4 cloves, minced"
            },
            {
                "name": "Dried basil",
                "amount": "1 teaspoon"
            },
            {
                "name": "Dried oregano",
                "amount": "1 teaspoon"
            },
            {
                "name": "Salt",
                "amount": "1/2 teaspoon"
            },
            {
                "name": "Pepper",
                "amount": "1/2 teaspoon"
            }
        ],
        "instructions": [
            "In a large bowl, whisk together olive oil, lemon juice, garlic, basil, oregano, salt, and pepper.",
            "Add chicken to the bowl and toss to coat.",
            "Cover and marinate in the refrigerator for at least 30 minutes or up to 2 hours.",
            "Preheat grill to medium-high heat.",
            "Remove chicken from marinade and discard any remaining marinade.",
            "Grill chicken for 5-7 minutes on each side, or until fully cooked (165°F internal temperature).",
            "Let chicken rest for a few minutes before serving."
        ],
        "hints": [
            "For extra flavor, try marinating the chicken overnight.",
            "For a spicy twist, try adding red pepper flakes to the marinade.",
            "Try using different types of herbs, such as rosemary or thyme, for variation.",
            "For a healthier option, try using skinless chicken thighs instead of breasts."
        ],
        "serving_size": "4 servings",
        "image": "14_Grilled_chicken.png"
    },
    {
        "id": 15,
        "name": "Sausage and Peppers",
        "ingredients": [
            {
                "name": "Italian sausage",
                "amount": "1 pound"
            },
            {
                "name": "Bell peppers",
                "amount": "3, sliced"
            },
            {
                "name": "Onions",
                "amount": "2, sliced"
            },
            {
                "name": "Garlic",
                "amount": "4 cloves, minced"
            },
            {
                "name": "Tomato sauce",
                "amount": "1 cup"
            },
            {
                "name": "Dried oregano",
                "amount": "1 teaspoon"
            },
            {
                "name": "Salt",
                "amount": "1/2 teaspoon"
            },
            {
                "name": "Pepper",
                "amount": "1/2 teaspoon"
            },
            {
                "name": "Olive oil",
                "amount": "2 tablespoons"
            }
        ],
        "instructions": [
            "In a large pan, heat olive oil over medium heat.",
            "Add sausage and cook until browned, about 5 minutes.",
            "Remove sausage from pan and set aside.",
            "Add bell peppers, onions, and garlic to the pan and cook until softened, about 5 minutes.",
            "Return sausage to the pan and add tomato sauce, oregano, salt, and pepper.",
            "Simmer for 10 minutes, or until the sauce has thickened slightly.",
            "Serve with crusty bread or over pasta."
        ],
        "hints": [
            "For a spicier dish, try using hot Italian sausage links.",
            "Try serving the sausage and peppers on crusty bread for a hearty sandwich.",
            "For a one-pan meal, try adding diced potatoes to the skillet along with the vegetables.",
            "Try using different types of bell peppers, such as orange or yellow, for variation."
        ],
        "serving_size": "4 servings",
        "image": "15_Sausage_and_peppers.png"
    },
    {
        "id": 16,
        "name": "Fried Chicken",
        "ingredients": [
            {
                "name": "Chicken legs or thighs",
                "amount": "8 pieces"
            },
            {
                "name": "Buttermilk",
                "amount": "2 cups"
            },
            {
                "name": "All-purpose flour",
                "amount": "2 cups"
            },
            {
                "name": "Salt",
                "amount": "2 teaspoons"
            },
            {
                "name": "Pepper",
                "amount": "1 teaspoon"
            },
            {
                "name": "Paprika",
                "amount": "1 teaspoon"
            },
            {
                "name": "Garlic powder",
                "amount": "1 teaspoon"
            },
            {
                "name": "Onion powder",
                "amount": "1 teaspoon"
            },
            {
                "name": "Vegetable oil",
                "amount": "1 cup"
            }
        ],
        "instructions": [
            "In a large bowl, soak chicken in buttermilk for at least 30 minutes or up to overnight.",
            "In another large bowl, mix together flour, salt, pepper, paprika, garlic powder, and onion powder.",
            "Heat oil in a large pan or deep-fryer to 350°F.",
            "Dredge chicken in the flour mixture, shaking off any excess.",
            "Carefully place chicken in the hot oil and cook for about 15 minutes, or until golden brown and cooked through.",
            "Remove chicken from oil and place on a paper towel-lined plate to drain.",
            "Serve hot with your favorite dipping sauce."
        ],

        "hints": [
            "For extra crunch, try double-dipping the chicken in the egg and flour mixtures.",
            "Try using buttermilk instead of regular milk for added tang.",
            "For a spicy twist, try adding cayenne pepper to the flour mixture.",
            "Try using boneless, skinless chicken thighs for a juicier option."
        ],
        "serving_size": "4 servings",
        "image": "16_Fried_chicken.png"
    },
    {
        "id": 17,
        "name": "Shepherd's Pie",
        "ingredients": [
            {
                "name": "Ground beef",
                "amount": "1 pound"
            },
            {
                "name": "Onion",
                "amount": "1 diced"
            },
            {
                "name": "Carrots",
                "amount": "2 diced"
            },
            {
                "name": "Celery",
                "amount": "2 stalks diced"
            },
            {
                "name": "Garlic",
                "amount": "3 cloves minced"
            },
            {
                "name": "Tomato paste",
                "amount": "1 tablespoon"
            },
            {
                "name": "Worcestershire sauce",
                "amount": "1 tablespoon"
            },
            {
                "name": "Thyme",
                "amount": "1 teaspoon"
            },
            {
                "name": "Rosemary",
                "amount": "1 teaspoon"
            },
            {
                "name": "Beef broth",
                "amount": "1 cup"
            },
            {
                "name": "Frozen peas",
                "amount": "1 cup"
            },
            {
                "name": "Potatoes",
                "amount": "6 medium peeled and chopped"
            },
            {
                "name": "Butter",
                "amount": "4 tablespoons"
            },
            {
                "name": "Milk",
                "amount": "1/2 cup"
            },
            {
                "name": "Salt",
                "amount": "1 teaspoon"
            },
            {
                "name": "Pepper",
                "amount": "1/2 teaspoon"
            }
        ],
        "instructions": [
            "Preheat oven to 375°F.",
            "In a large pan, cook ground beef until browned, breaking it up into small pieces.",
            "Add onion, carrots, celery, and garlic to the pan and cook until vegetables are soft.",
            "Stir in tomato paste, Worcestershire sauce, thyme, rosemary, beef broth, and peas.",
            "Spread mixture into a 9x13 inch baking dish.",
            "Boil potatoes in a large pot until tender. Drain and mash with butter and milk.",
            "Season with salt and pepper to taste.",
            "Spread mashed potatoes over the beef mixture in the baking dish.",
            "Bake for 30 minutes or until the top is lightly browned and the edges are bubbly."
        ],
        "hints": [
            "For added flavor, try adding grated Parmesan cheese to the mashed potatoes.",
            "Try using chicken or vegetable broth instead of beef broth.",
            "For a healthier option, try using ground turkey or chicken instead of beef or lamb.",
            "Try adding chopped mushrooms to the meat mixture for extra texture."
        ],
        "serving_size": "6 servings",
        "image": "17_Shepherds_pie.png"
    },
    {
        "id": 18,
        "name": "Crockpot Chili",
        "ingredients": [
            {
                "name": "ground beef",
                "amount": "1 lb"
            },
            {
                "name": "diced onions",
                "amount": "1 large"
            },
            {
                "name": "diced green bell peppers",
                "amount": "1 large"
            },
            {
                "name": "garlic cloves",
                "amount": "3 minced"
            },
            {
                "name": "canned diced tomatoes",
                "amount": "28 oz"
            },
            {
                "name": "canned kidney beans",
                "amount": "15 oz"
            },
            {
                "name": "canned black beans",
                "amount": "15 oz"
            },
            {
                "name": "chili powder",
                "amount": "2 tbsp"
            },
            {
                "name": "ground cumin",
                "amount": "1 tsp"
            },
            {
                "name": "salt",
                "amount": "1 tsp"
            },
            {
                "name": "black pepper",
                "amount": "1/2 tsp"
            }
        ],
        "instructions": [
            "In a large skillet over medium heat, cook ground beef until browned, breaking it into crumbles as it cooks.",
            "Add diced onions, bell peppers, and minced garlic to the skillet and continue cooking until the vegetables are tender.",
            "Drain any excess grease from the beef mixture and transfer it to a 6-quart slow cooker.",
            "Add canned diced tomatoes, kidney beans, black beans, chili powder, cumin, salt, and pepper to the slow cooker.",
            "Stir everything together until well combined.",
            "Cover and cook on low heat for 6-8 hours or until the flavors have melded and the chili is hot and bubbly."
        ],
        "hints": [
            "Feel free to add additional ingredients to the chili such as corn, jalapenos, or different types of beans.",
            "If you prefer a thicker chili, you can mash some of the beans against the side of the slow cooker or stir in a tablespoon or two of cornmeal.",
            "Serve with your favorite toppings such as shredded cheese, sour cream, green onions, or cornbread.",
            "Leftover chili can be stored in an airtight container in the refrigerator for up to 5 days."
        ],
        "serving_size": "6-8",
        "image": "18_Crockpot_chili.png"
    },
    {
        "id": 19,
        "name": "Baked Ziti",
        "ingredients": [
            {
                "name": "ziti pasta",
                "amount": "1 lb"
            },
            {
                "name": "ground beef",
                "amount": "1 lb"
            },
            {
                "name": "onion",
                "amount": "1 medium, diced"
            },
            {
                "name": "garlic",
                "amount": "4 cloves, minced"
            },
            {
                "name": "canned crushed tomatoes",
                "amount": "28 oz"
            },
            {
                "name": "tomato sauce",
                "amount": "8 oz"
            },
            {
                "name": "sugar",
                "amount": "1 tsp"
            },
            {
                "name": "dried basil",
                "amount": "1 tsp"
            },
            {
                "name": "salt",
                "amount": "1 tsp"
            },
            {
                "name": "black pepper",
                "amount": "1/2 tsp"
            },
            {
                "name": "ricotta cheese",
                "amount": "15 oz"
            },
            {
                "name": "egg",
                "amount": "1 large"
            },
            {
                "name": "grated Parmesan cheese",
                "amount": "1/2 cup"
            },
            {
                "name": "mozzarella cheese",
                "amount": "2 cups, shredded"
            }
        ],
        "instructions": [
            "Preheat oven to 375°F.",
            "Cook ziti pasta according to package instructions until al dente. Drain and set aside.",
            "In a large skillet, brown ground beef over medium heat until no longer pink. Drain excess fat.",
            "Add onion and garlic to the skillet and cook until the onion is translucent.",
            "Add crushed tomatoes, tomato sauce, sugar, basil, salt, and pepper to the skillet. Stir to combine and bring to a simmer.",
            "In a separate bowl, mix together ricotta cheese, egg, and Parmesan cheese.",
            "In a 9x13 inch baking dish, layer half of the cooked ziti, half of the meat sauce, and half of the ricotta mixture.",
            "Repeat the layering with the remaining ziti, meat sauce, and ricotta mixture.",
            "Top with shredded mozzarella cheese.",
            "Bake in the preheated oven for 25-30 minutes or until the cheese is melted and bubbly."
        ],
        "hints": [
            "For extra flavor, try adding Italian sausage to the meat sauce.",
            "You can substitute ground beef with ground turkey or chicken.",
            "To make the dish creamier, stir in a cup of heavy cream to the meat sauce.",
            "Leftovers can be stored in an airtight container in the refrigerator for up to 3 days."
        ],
        "serving_size": "8-10",
        "image": "19_Baked_ziti.png"
    },
    {
        "id": 20,
        "name": "Slow Cooker Pulled Pork",
        "ingredients": [
            {
                "name": "pork shoulder",
                "amount": "3-4 lb, boneless and trimmed of excess fat"
            },
            {
                "name": "brown sugar",
                "amount": "1/2 cup"
            },
            {
                "name": "paprika",
                "amount": "1 tsp"
            },
            {
                "name": "garlic powder",
                "amount": "1 tsp"
            },
            {
                "name": "onion powder",
                "amount": "1 tsp"
            },
            {
                "name": "cumin",
                "amount": "1 tsp"
            },
            {
                "name": "salt",
                "amount": "1 tsp"
            },
            {
                "name": "black pepper",
                "amount": "1/2 tsp"
            },
            {
                "name": "chicken broth",
                "amount": "1 cup"
            },
            {
                "name": "apple cider vinegar",
                "amount": "1/4 cup"
            },
            {
                "name": "Worcestershire sauce",
                "amount": "1 tbsp"
            }
        ],
        "instructions": [
            "In a small bowl, mix together brown sugar, paprika, garlic powder, onion powder, cumin, salt, and pepper.",
            "Rub the spice mixture all over the pork shoulder.",
            "Place the pork shoulder in a slow cooker.",
            "In a separate bowl, whisk together chicken broth, apple cider vinegar, and Worcestershire sauce.",
            "Pour the broth mixture over the pork.",
            "Cover the slow cooker and cook on low heat for 8-10 hours or until the pork is tender and falls apart easily.",
            "Remove the pork from the slow cooker and let it cool slightly.",
            "Using two forks, shred the pork into bite-sized pieces.",
            "Return the shredded pork to the slow cooker and stir in any remaining cooking liquid.",
            "Serve the pulled pork on rolls, over rice, or in tacos."
        ],
        "hints": [
            "For extra flavor, try adding a sliced onion or diced bell pepper to the slow cooker.",
            "If you prefer a sweeter pulled pork, increase the amount of brown sugar.",
            "Leftovers can be stored in an airtight container in the refrigerator for up to 4 days."
        ],
        "serving_size": "6-8",
        "image": "20_Slow_cooker_pulled_pork.png"
    },
    {
        "id": 21,
        "name": "Beef and Broccoli Stir-Fry",
        "ingredients": [
            {
                "name": "beef sirloin",
                "amount": "1 lb, sliced into thin strips"
            },
            {
                "name": "broccoli florets",
                "amount": "4 cups"
            },
            {
                "name": "garlic",
                "amount": "4 cloves, minced"
            },
            {
                "name": "ginger",
                "amount": "1 inch piece, grated"
            },
            {
                "name": "low-sodium soy sauce",
                "amount": "1/2 cup"
            },
            {
                "name": "brown sugar",
                "amount": "2 tbsp"
            },
            {
                "name": "cornstarch",
                "amount": "2 tbsp"
            },
            {
                "name": "vegetable oil",
                "amount": "2 tbsp"
            },
            {
                "name": "green onions",
                "amount": "1/4 cup, sliced"
            },
            {
                "name": "red pepper flakes",
                "amount": "1 tsp (optional)"
            }
        ],
        "instructions": [
            "In a small bowl, whisk together soy sauce, brown sugar, and cornstarch.",
            "Heat a large skillet or wok over high heat and add 1 tablespoon of vegetable oil.",
            "Add the sliced beef and stir-fry until browned on all sides, about 5 minutes.",
            "Remove the beef from the skillet and set it aside.",
            "Add the remaining 1 tablespoon of vegetable oil to the same skillet.",
            "Add the minced garlic and grated ginger and stir-fry for 30 seconds.",
            "Add the broccoli florets to the skillet and stir-fry until they are bright green and slightly tender, about 5 minutes.",
            "Return the beef to the skillet and pour in the soy sauce mixture.",
            "Stir everything together until the sauce has thickened, about 2 minutes.",
            "Stir in the sliced green onions and optional red pepper flakes.",
            "Serve the beef and broccoli stir-fry over rice."
        ],
        "hints": [
            "For extra flavor, try adding sliced bell peppers, mushrooms, or carrots to the stir-fry.",
            "To make this dish gluten-free, use a gluten-free soy sauce.",
            "Leftovers can be stored in an airtight container in the refrigerator for up to 3 days."
        ],
        "serving_size": "4-6",
        "image": "21_Beef_and_broccoli_stir-fry.png"
    },
    {
        "id": 22,
        "name": "Fried Rice with Bacon and Egg",
        "ingredients": [
            {
                "name": "bacon",
                "amount": "6 slices, diced"
            },
            {
                "name": "large eggs",
                "amount": "2, beaten"
            },
            {
                "name": "cooking oil",
                "amount": "2 tbsp"
            },
            {
                "name": "minced garlic",
                "amount": "1 clove"
            },
            {
                "name": "diced onion",
                "amount": "1/2 cup"
            },
            {
                "name": "carrots",
                "amount": "1/2 cup, diced"
            },
            {
                "name": "frozen peas and carrots",
                "amount": "1 cup"
            },
            {
                "name": "day-old cooked rice",
                "amount": "4 cups"
            },
            {
                "name": "soy sauce",
                "amount": "2 tbsp"
            },
            {
                "name": "salt",
                "amount": "to taste"
            },
            {
                "name": "black pepper",
                "amount": "to taste"
            },
            {
                "name": "scallions",
                "amount": "1/4 cup, sliced"
            }
        ],
        "instructions": [
            "In a large non-stick pan, cook the bacon over medium heat until crispy, about 8 minutes.",
            "Remove the bacon from the pan with a slotted spoon and set aside.",
            "In the same pan, add 1 tablespoon of cooking oil and scramble the eggs until set, about 2 minutes.",
            "Remove the eggs from the pan and set aside.",
            "In the same pan, add the remaining 1 tablespoon of cooking oil, minced garlic, diced onion, and carrots.",
            "Cook over medium heat until the vegetables are tender, about 5 minutes.",
            "Add the frozen peas and carrots to the pan and cook for another 2 minutes.",
            "Add the cooked rice to the pan and stir everything together until heated through, about 5 minutes.",
            "Stir in the soy sauce, salt, and black pepper.",
            "Stir in the bacon, eggs, and scallions.",
            "Serve the fried rice hot."
        ],
        "hints": [
            "For extra flavor, try adding diced ham, leftover chicken or shrimp, or sliced mushrooms to the fried rice.",
            "To make this dish gluten-free, use a gluten-free soy sauce.",
            "For the best texture, use day-old cooked rice that has been chilled in the refrigerator.",
            "Leftovers can be stored in an airtight container in the refrigerator for up to 3 days."
        ],
        "serving_size": "4-6",
        "image": "22_Fried_rice_with_bacon_and_egg.png"
    },
    {
        "id": 23,
        "name": "Shrimp Scampi",
        "ingredients": [
            {
                "name": "large shrimp",
                "amount": "1 lb, peeled and deveined"
            },
            {
                "name": "butter",
                "amount": "6 tbsp"
            },
            {
                "name": "minced garlic",
                "amount": "4 cloves"
            },
            {
                "name": "lemon juice",
                "amount": "1/4 cup"
            },
            {
                "name": "chicken broth",
                "amount": "1/4 cup"
            },
            {
                "name": "white wine",
                "amount": "1/4 cup"
            },
            {
                "name": "red pepper flakes",
                "amount": "1/2 tsp"
            },
            {
                "name": "salt",
                "amount": "to taste"
            },
            {
                "name": "black pepper",
                "amount": "to taste"
            },
            {
                "name": "chopped parsley",
                "amount": "1/4 cup"
            },
            {
                "name": "angel hair pasta",
                "amount": "1 lb, cooked according to package instructions"
            }
        ],
        "instructions": [
            "In a large saucepan, melt 4 tablespoons of the butter over medium heat.",
            "Add the minced garlic and cook until fragrant, about 1 minute.",
            "Add the lemon juice, chicken broth, white wine, red pepper flakes, salt, and black pepper to the pan.",
            "Bring the mixture to a boil and then reduce the heat and let it simmer for 5 minutes.",
            "Add the shrimp to the pan and cook until pink and cooked through, about 3 minutes.",
            "Remove the pan from the heat and stir in the remaining 2 tablespoons of butter and chopped parsley.",
            "Serve the shrimp scampi over cooked angel hair pasta."
        ],
        "hints": [
            "For extra flavor, try using garlic butter or lemon-pepper butter in place of regular butter.",
            "To make this dish gluten-free, serve the shrimp scampi without the pasta or serve it over gluten-free pasta.",
            "For a low-carb option, serve the shrimp scampi over steamed broccoli or zucchini noodles.",
            "Leftovers can be stored in an airtight container in the refrigerator for up to 3 days."
        ],
        "serving_size": "4-6",
        "image": "23_Shrimp_scampi.png"
    },
    {
        "id": 24,
        "name": "Baked Potatoes",
        "ingredients": [
            {
                "name": "large russet potatoes",
                "amount": "4-6, scrubbed clean"
            },
            {
                "name": "olive oil",
                "amount": "1 tbsp"
            },
            {
                "name": "salt",
                "amount": "1 tsp"
            },
            {
                "name": "black pepper",
                "amount": "1/2 tsp"
            }
        ],
        "instructions": [
            "Preheat the oven to 400°F.",
            "Line a large baking sheet with parchment paper or aluminum foil.",
            "Pierce each potato several times with a fork.",
            "Brush each potato with olive oil and season with salt and black pepper.",
            "Bake the potatoes in the preheated oven for 45-60 minutes, or until they are tender when poked with a fork.",
            "Remove the potatoes from the oven and let them cool for 5-10 minutes before slicing them open and serving."
        ],
        "hints": [
            "For extra crispness, try rubbing the potatoes with a little bit of vegetable oil or melted butter before baking.",
            "For extra flavor, try seasoning the potatoes with garlic powder, onion powder, or chili powder.",
            "To make stuffed baked potatoes, slice the potatoes open and add toppings like cheese, bacon, sour cream, and green onions.",
            "Leftovers can be stored in an airtight container in the refrigerator for up to 3 days."
        ],
        "serving_size": "4-6",
        "image": "24_Baked_potatoes.png"
    },
    {
        "id": 25,
        "name": "Baked Sweet Potatoes",
        "ingredients": [
            {
                "name": "medium sweet potatoes",
                "amount": "4-6, scrubbed clean"
            },
            {
                "name": "olive oil",
                "amount": "1 tbsp"
            },
            {
                "name": "salt",
                "amount": "1 tsp"
            },
            {
                "name": "black pepper",
                "amount": "1/2 tsp"
            }
        ],
        "instructions": [
            "Preheat the oven to 400°F.",
            "Line a large baking sheet with parchment paper or aluminum foil.",
            "Pierce each sweet potato several times with a fork.",
            "Brush each sweet potato with olive oil and season with salt and black pepper.",
            "Bake the sweet potatoes in the preheated oven for 45-60 minutes, or until they are tender when poked with a fork.",
            "Remove the sweet potatoes from the oven and let them cool for 5-10 minutes before slicing them open and serving."
        ],
        "hints": [
            "For extra crispness, try rubbing the sweet potatoes with a little bit of vegetable oil or melted butter before baking.",
            "For extra flavor, try seasoning the sweet potatoes with cinnamon, nutmeg, or allspice.",
            "To make stuffed sweet potatoes, slice the sweet potatoes open and add toppings like cheese, bacon, honey, or nuts.",
            "Leftovers can be stored in an airtight container in the refrigerator for up to 3 days."
        ],
        "serving_size": "4-6",
        "image": "25_Baked_sweet_potatoes.png"
    },
    {
        "id": 26,
        "name": "Fried Egg Sandwich",
        "ingredients": [
            {
                "name": "Bread",
                "amount": "2 slices"
            },
            {
                "name": "Eggs",
                "amount": "2 large"
            },
            {
                "name": "Butter",
                "amount": "1 tablespoon"
            },
            {
                "name": "Salt",
                "amount": "1/4 teaspoon"
            },
            {
                "name": "Pepper",
                "amount": "1/4 teaspoon"
            },
            {
                "name": "Cheese (optional)",
                "amount": "2 slices"
            },
            {
                "name": "Tomato (optional)",
                "amount": "1 slice"
            },
            {
                "name": "Lettuce (optional)",
                "amount": "1 leaf"
            }
        ],
        "instructions": [
            "Toast the bread until golden brown.",
            "Melt the butter in a non-stick pan over medium heat.",
            "Crack the eggs into the pan and sprinkle with salt and pepper.",
            "Cook until the whites are set and the yolks are still runny, about 2-3 minutes.",
            "Assemble the sandwich by placing the eggs on one slice of toast, followed by the cheese (if using), tomato, and lettuce.",
            "Top with the other slice of toast."
        ],
        "serving_suggestion": "Serve hot with a side of fruit or breakfast potatoes.",
        "prep_time": "5 minutes",
        "cook_time": "5 minutes",
        "image": "26_Fried_egg_sandwich.png"
    },
    {
        "id": 27,
        "name": "Chicken Alfredo",
        "serving_size": 4,
        "cooking_time": "30",
        "ingredients": [
            {
                "name": "boneless chicken breast",
                "quantity": "4"
            },
            {
                "name": "butter",
                "quantity": "4 tablespoons"
            },
            {
                "name": "garlic cloves",
                "quantity": "4"
            },
            {
                "name": "all-purpose flour",
                "quantity": "2 tablespoons"
            },
            {
                "name": "heavy cream",
                "quantity": "2 cups"
            },
            {
                "name": "grated parmesan cheese",
                "quantity": "1 cup"
            },
            {
                "name": "salt",
                "quantity": "1 teaspoon"
            },
            {
                "name": "black pepper",
                "quantity": "1/2 teaspoon"
            },
            {
                "name": "fettuccine pasta",
                "quantity": "1 pound"
            },
            {
                "name": "parsley",
                "quantity": "2 tablespoons"
            }
        ],
        "instructions": [
            "Cook the fettuccine pasta according to package instructions.",
            "Season the chicken breast with salt and black pepper.",
            "In a large pan, heat 2 tablespoons of butter over medium heat.",
            "Add chicken to the pan and cook until browned on both sides and cooked through, about 6 minutes per side.",
            "Remove the chicken from the pan and set aside.",
            "In the same pan, melt the remaining 2 tablespoons of butter.",
            "Add the minced garlic and cook until fragrant, about 1 minute.",
            "Stir in the flour and cook for 1 minute.",
            "Gradually whisk in the heavy cream until smooth.",
            "Stir in the parmesan cheese until melted and well combined.",
            "Add the cooked chicken back to the pan and toss with the sauce.",
            "Serve the chicken and sauce over the cooked fettuccine pasta.",
            "Garnish with chopped parsley."
        ],
        "hints": [
            "Use freshly grated parmesan cheese for the best flavor.",
            "For a thicker sauce, increase the amount of flour.",
            "For a lighter sauce, use half-and-half or milk in place of heavy cream.",
            "Experiment with other herbs, such as basil or thyme, for added flavor.",
            "Add some sauteed mushrooms or sun-dried tomatoes to the dish for extra flavor and texture."
        ],
        "image": "27_Chicken_alfredo.png"
    },
    {
        "id": 28,
        "name": "Meatball Subs",
        "serving_size": 4,
        "cooking_time": "30",
        "ingredients": [
            {
                "name": "ground beef",
                "quantity": "1 pound"
            },
            {
                "name": "breadcrumbs",
                "quantity": "1/2 cup"
            },
            {
                "name": "grated parmesan cheese",
                "quantity": "1/2 cup"
            },
            {
                "name": "minced garlic",
                "quantity": "2 cloves"
            },
            {
                "name": "chopped fresh parsley",
                "quantity": "2 tablespoons"
            },
            {
                "name": "egg",
                "quantity": "1"
            },
            {
                "name": "salt",
                "quantity": "1 teaspoon"
            },
            {
                "name": "black pepper",
                "quantity": "1/2 teaspoon"
            },
            {
                "name": "olive oil",
                "quantity": "2 tablespoons"
            },
            {
                "name": "marinara sauce",
                "quantity": "2 cups"
            },
            {
                "name": "hoagie rolls",
                "quantity": "4"
            },
            {
                "name": "shredded mozzarella cheese",
                "quantity": "1 cup"
            }
        ],
        "instructions": [
            "Preheat oven to 400°F.",
            "In a large bowl, mix together the ground beef, breadcrumbs, parmesan cheese, garlic, parsley, egg, salt, and pepper.",
            "Form the mixture into 16 meatballs.",
            "In a large pan, heat the olive oil over medium heat.",
            "Add the meatballs to the pan and cook until browned on all sides, about 6 minutes.",
            "Remove the meatballs from the pan and set aside.",
            "In the same pan, add the marinara sauce and bring to a simmer.",
            "Add the meatballs back to the pan and toss to coat with the sauce.",
            "Split the hoagie rolls in half lengthwise and place on a baking sheet.",
            "Spoon the meatballs and sauce over the bottom half of the hoagie rolls.",
            "Top with the shredded mozzarella cheese.",
            "Bake in the preheated oven until the cheese is melted and the rolls are crispy, about 10 minutes.",
            "Serve with the top half of the hoagie rolls."
        ],
        "hints": [
            "Use good-quality hoagie rolls for the best flavor and texture.",
            "For extra flavor, brush the hoagie rolls with garlic butter before baking.",
            "Add some sauteed onions and peppers to the meatball mixture for extra flavor and texture.",
            "Experiment with different types of cheese, such as provolone or cheddar.",
            "For a spicier version, add some red pepper flakes to the meatball mixture."
        ],
        "image": "28_Meatball_subs.png"
    },
    {
        "id": 29,
        "name": "BBQ Pulled Pork",
        "serving_size": 8,
        "cooking_time": "8 hours",
        "ingredients": [
            {
                "name": "pork shoulder",
                "quantity": "4-5 pounds"
            },
            {
                "name": "salt",
                "quantity": "2 teaspoons"
            },
            {
                "name": "black pepper",
                "quantity": "1 teaspoon"
            },
            {
                "name": "chili powder",
                "quantity": "1 teaspoon"
            },
            {
                "name": "paprika",
                "quantity": "1 teaspoon"
            },
            {
                "name": "garlic powder",
                "quantity": "1 teaspoon"
            },
            {
                "name": "onion powder",
                "quantity": "1 teaspoon"
            },
            {
                "name": "brown sugar",
                "quantity": "1/2 cup"
            },
            {
                "name": "apple cider vinegar",
                "quantity": "1/2 cup"
            },
            {
                "name": "tomato paste",
                "quantity": "1/4 cup"
            },
            {
                "name": "chicken broth",
                "quantity": "1 cup"
            },
            {
                "name": "your favorite BBQ sauce",
                "quantity": "1 cup"
            }
        ],
        "instructions": [
            "Preheat oven to 325°F.",
            "Mix together the salt, pepper, chili powder, paprika, garlic powder, onion powder, and brown sugar in a bowl.",
            "Rub the mixture all over the pork shoulder.",
            "Place the pork in a large roasting pan.",
            "In a separate bowl, mix together the apple cider vinegar, tomato paste, chicken broth, and BBQ sauce.",
            "Pour the mixture over the pork.",
            "Cover the roasting pan with foil and bake in the preheated oven for 8 hours or until the pork is tender and shreds easily.",
            "Remove the pork from the oven and shred with two forks.",
            "Serve the shredded pork on buns with additional BBQ sauce, if desired."
        ],
        "hints": [
            "For added flavor, smoke the pork shoulder on a BBQ pit for the first hour of cooking.",
            "Try using different types of BBQ sauce, such as honey mustard or spicy.",
            "Use a meat thermometer to ensure that the pork reaches an internal temperature of 145°F before serving.",
            "Add some sliced pickles, coleslaw, or pickled red onions to the sandwich for extra flavor and crunch.",
            "Leftover pulled pork can be stored in the refrigerator for up to 5 days or frozen for up to 3 months."
        ],
        "image": "29_Bbq_pulled_pork.png"
    },
    {
        "id": 30,
        "name": "Fried Chicken and Waffles",
        "serving_size": 4,
        "cooking_time": "45 minutes",
        "ingredients": [
            {
                "name": "chicken legs",
                "quantity": "4"
            },
            {
                "name": "buttermilk",
                "quantity": "2 cups"
            },
            {
                "name": "hot sauce",
                "quantity": "2 tablespoons"
            },
            {
                "name": "all-purpose flour",
                "quantity": "2 cups"
            },
            {
                "name": "salt",
                "quantity": "1 teaspoon"
            },
            {
                "name": "black pepper",
                "quantity": "1/2 teaspoon"
            },
            {
                "name": "cayenne pepper",
                "quantity": "1/2 teaspoon"
            },
            {
                "name": "garlic powder",
                "quantity": "1/2 teaspoon"
            },
            {
                "name": "onion powder",
                "quantity": "1/2 teaspoon"
            },
            {
                "name": "vegetable oil",
                "quantity": "3-4 cups"
            },
            {
                "name": "waffle mix",
                "quantity": "2 cups"
            },
            {
                "name": "milk",
                "quantity": "1 cup"
            },
            {
                "name": "eggs",
                "quantity": "2"
            }
        ],
        "instructions": [
            "In a large bowl, mix together the buttermilk and hot sauce.",
            "Add the chicken legs to the bowl, making sure they are well coated with the buttermilk mixture.",
            "Cover the bowl and refrigerate for at least 1 hour or up to overnight.",
            "In a separate bowl, mix together the flour, salt, black pepper, cayenne pepper, garlic powder, and onion powder.",
            "Remove the chicken legs from the buttermilk mixture, allowing any excess to drain off.",
            "Dredge the chicken legs in the flour mixture, making sure they are well coated.",
            "Heat the vegetable oil in a large, deep pan until it reaches 350°F.",
            "Carefully add the chicken legs to the hot oil and cook for 10-12 minutes or until golden brown and fully cooked (165°F internal temperature).",
            "While the chicken is cooking, prepare the waffles according to the package instructions, using the waffle mix, milk, and eggs.",
            "Serve the fried chicken on top of the waffles and garnish with syrup and butter, if desired."
        ],
        "hints": [
            "For a crunchier coating, double-dredge the chicken by first coating it in flour, then dipping it back into the buttermilk mixture, and finally coating it in the flour mixture again.",
            "Try using different types of hot sauce, such as Chipotle or Frank's RedHot, for a different flavor profile.",
            "Add some chopped fresh herbs, such as rosemary or thyme, to the flour mixture for added flavor.",
            "Serve the fried chicken with a side of coleslaw or potato salad for a complete meal.",
            "Leftover fried chicken can be stored in the refrigerator for up to 3 days"
        ],
        "image": "30_Fried_chicken_and_waffles.png"
    },
    {
        "id": 31,
        "name": "Creamy Tomato Soup",
        "serving_size": 4,
        "cooking_time": "30 minutes",
        "ingredients": [
            {
                "name": "butter",
                "quantity": "2 tablespoons"
            },
            {
                "name": "onion, diced",
                "quantity": "1"
            },
            {
                "name": "garlic, minced",
                "quantity": "2 cloves"
            },
            {
                "name": "all-purpose flour",
                "quantity": "2 tablespoons"
            },
            {
                "name": "chicken broth",
                "quantity": "4 cups"
            },
            {
                "name": "canned tomatoes, undrained and crushed",
                "quantity": "28 ounces"
            },
            {
                "name": "sugar",
                "quantity": "1 teaspoon"
            },
            {
                "name": "dried basil",
                "quantity": "1 teaspoon"
            },
            {
                "name": "dried oregano",
                "quantity": "1/2 teaspoon"
            },
            {
                "name": "salt",
                "quantity": "1/2 teaspoon"
            },
            {
                "name": "black pepper",
                "quantity": "1/4 teaspoon"
            },
            {
                "name": "heavy cream",
                "quantity": "1/2 cup"
            }
        ],
        "instructions": [
            "In a large pot, melt the butter over medium heat.",
            "Add the onion and garlic and cook until softened, about 5 minutes.",
            "Stir in the flour and cook for 1-2 minutes.",
            "Gradually whisk in the chicken broth until well combined.",
            "Stir in the tomatoes, sugar, basil, oregano, salt, and pepper.",
            "Bring the mixture to a simmer and cook for 15 minutes.",
            "Remove the pot from heat and puree the soup using an immersion blender or transfer to a blender and puree in batches.",
            "Stir in the heavy cream and heat through, being careful not to boil the soup.",
            "Taste and adjust seasoning, if necessary.",
            "Serve hot with crusty bread or a grilled cheese sandwich, if desired."
        ],
        "hints": [
            "For a smoother texture, strain the pureed soup through a fine mesh strainer.",
            "For a sweeter soup, increase the amount of sugar to taste.",
            "For a spicier soup, add some red pepper flakes or cayenne pepper to taste.",
            "Try using different types of canned tomatoes, such as fire-roasted or San Marzano, for a different flavor.",
            "For a vegetarian option, use vegetable broth instead of chicken broth."
        ],
        "image": "31_Creamy_tomato_soup.png"
    },
    {
        "id": 32,
        "name": "Grilled Chicken Caesar Salad",
        "serving_size": 4,
        "cooking_time": "30 minutes",
        "ingredients": [
            {
                "name": "chicken breast",
                "quantity": "4"
            },
            {
                "name": "olive oil",
                "quantity": "2 tablespoons"
            },
            {
                "name": "salt",
                "quantity": "1 teaspoon"
            },
            {
                "name": "black pepper",
                "quantity": "1/2 teaspoon"
            },
            {
                "name": "romaine lettuce, chopped",
                "quantity": "8 cups"
            },
            {
                "name": "Parmesan cheese, grated",
                "quantity": "1 cup"
            },
            {
                "name": "croutons",
                "quantity": "2 cups"
            },
            {
                "name": "Caesar dressing",
                "quantity": "1 cup"
            }
        ],
        "instructions": [
            "Preheat the grill to medium-high heat.",
            "Brush the chicken with the olive oil and season with salt and pepper.",
            "Grill the chicken until cooked through, about 6-8 minutes per side.",
            "Let the chicken rest for 5 minutes before slicing into strips.",
            "In a large bowl, combine the romaine lettuce, Parmesan cheese, croutons, and chicken strips.",
            "Add the Caesar dressing and toss to coat.",
            "Divide the salad among serving plates.",
            "Serve immediately, garnished with additional Parmesan cheese and croutons, if desired."
        ],
        "hints": [
            "For a crispy texture, bake the croutons in the oven until golden brown.",
            "For a lighter option, use a lighter dressing, such as a vinaigrette or lemon dressing.",
            "Add other vegetables, such as cherry tomatoes or cucumbers, for additional flavor and texture.",
            "Try using grilled or baked salmon or shrimp in place of the chicken for a different twist on the classic salad."
        ],
        "image": "32_Grilled_chicken_caesar.png"
    },
    {
        "id": 33,
        "name": "Chicken Parmesan Meatballs",
        "serving_size": 4,
        "cooking_time": "30 minutes",
        "ingredients": [
            {
                "name": "ground chicken",
                "quantity": "1 pound"
            },
            {
                "name": "breadcrumbs",
                "quantity": "1/2 cup"
            },
            {
                "name": "grated Parmesan cheese",
                "quantity": "1/2 cup"
            },
            {
                "name": "minced garlic",
                "quantity": "2 cloves"
            },
            {
                "name": "egg",
                "quantity": "1"
            },
            {
                "name": "salt",
                "quantity": "1/2 teaspoon"
            },
            {
                "name": "black pepper",
                "quantity": "1/4 teaspoon"
            },
            {
                "name": "olive oil",
                "quantity": "2 tablespoons"
            },
            {
                "name": "marinara sauce",
                "quantity": "1 1/2 cups"
            },
            {
                "name": "shredded mozzarella cheese",
                "quantity": "1 cup"
            }
        ],
        "instructions": [
            "Preheat oven to 400°F (200°C).",
            "In a large bowl, mix together the ground chicken, breadcrumbs, Parmesan cheese, garlic, egg, salt, and pepper.",
            "Form the mixture into 1 1/2-inch meatballs.",
            "In a large skillet, heat the olive oil over medium heat.",
            "Add the meatballs to the skillet and cook until browned on all sides, about 5 minutes.",
            "Remove the meatballs from the heat.",
            "Pour the marinara sauce into the bottom of a 9x13 inch baking dish.",
            "Place the meatballs in the baking dish, spooning marinara sauce over the top.",
            "Bake for 15-20 minutes, or until the meatballs are fully cooked.",
            "Remove the meatballs from the oven and sprinkle the shredded mozzarella cheese over the top.",
            "Return the meatballs to the oven and bake for an additional 5 minutes, or until the cheese is melted and bubbly."
        ],
        "hints": [
            "For a crispy texture, bake the meatballs on a wire rack set over a baking sheet.",
            "Serve the meatballs with pasta or on a hoagie roll for a sandwich.",
            "Try using ground turkey or beef instead of chicken for a different twist on the dish.",
            "Add herbs, such as basil or oregano, to the meatball mixture for additional flavor."
        ],
        "image": "33_Chicken_parmesan_meatballs.png"
    },
    {
        "id": 34,
        "name": "Pesto Pasta",
        "serving_size": 4,
        "cooking_time": "15 minutes",
        "ingredients": [
            {
                "name": "spaghetti",
                "quantity": "8 ounces"
            },
            {
                "name": "basil leaves",
                "quantity": "2 cups"
            },
            {
                "name": "pine nuts",
                "quantity": "1/4 cup"
            },
            {
                "name": "grated Parmesan cheese",
                "quantity": "1/2 cup"
            },
            {
                "name": "minced garlic",
                "quantity": "2 cloves"
            },
            {
                "name": "olive oil",
                "quantity": "1/2 cup"
            },
            {
                "name": "lemon juice",
                "quantity": "2 tablespoons"
            },
            {
                "name": "salt",
                "quantity": "1/2 teaspoon"
            },
            {
                "name": "black pepper",
                "quantity": "1/4 teaspoon"
            },
            {
                "name": "cherry tomatoes",
                "quantity": "1 cup (halved)"
            }
        ],
        "instructions": [
            "Cook the spaghetti according to package instructions until al dente.",
            "In a food processor, pulse together the basil leaves, pine nuts, Parmesan cheese, garlic, olive oil, lemon juice, salt, and pepper until smooth.",
            "Toss the cooked spaghetti with the pesto sauce.",
            "Garnish with cherry tomatoes and additional Parmesan cheese, if desired."
        ],
        "hints": [
            "Try using different types of pasta, such as fettuccine or penne, for a change.",
            "Add grilled chicken or shrimp for added protein.",
            "Use sun-dried tomatoes in place of cherry tomatoes for a different flavor.",
            "Store leftover pesto in an airtight container in the refrigerator for up to 1 week."
        ],
        "image": "34_Pesto_pasta.png"
    },
    {
        "id": 35,
        "name": "Baked Salmon with Lemon and Herbs",
        "serving_size": 4,
        "cooking_time": "20 minutes",
        "ingredients": [
            {
                "name": "salmon fillets",
                "quantity": "4 (6-ounce)"
            },
            {
                "name": "olive oil",
                "quantity": "2 tablespoons"
            },
            {
                "name": "lemon juice",
                "quantity": "2 tablespoons"
            },
            {
                "name": "minced garlic",
                "quantity": "2 cloves"
            },
            {
                "name": "dried basil",
                "quantity": "1 teaspoon"
            },
            {
                "name": "dried oregano",
                "quantity": "1 teaspoon"
            },
            {
                "name": "dried thyme",
                "quantity": "1 teaspoon"
            },
            {
                "name": "salt",
                "quantity": "1/2 teaspoon"
            },
            {
                "name": "black pepper",
                "quantity": "1/4 teaspoon"
            },
            {
                "name": "lemon wedges",
                "quantity": "4"
            }
        ],
        "instructions": [
            "Preheat oven to 400°F (200°C).",
            "In a small bowl, whisk together the olive oil, lemon juice, garlic, basil, oregano, thyme, salt, and pepper.",
            "Line a baking sheet with aluminum foil and place the salmon fillets on the sheet.",
            "Brush the top of each fillet with the lemon and herb mixture.",
            "Bake for 15-20 minutes, or until the salmon is opaque and flakes easily with a fork.",
            "Serve with lemon wedges."
        ],
        "hints": [
            "Try using different herbs, such as dill or rosemary, for a change in flavor.",
            "Add some chopped vegetables, such as bell peppers and onions, to the baking sheet for a complete meal.",
            "For added crispiness, broil the salmon for the last 2-3 minutes of baking.",
            "Store leftover salmon in an airtight container in the refrigerator for up to 2 days."
        ],
        "image": "35_Baked_salmon_with_lemon_and_herbs.png"
    },
    {
        "id": 36,
        "name": "Grilled Chicken Fajitas",
        "serving_size": 4,
        "cooking_time": "20 minutes",
        "ingredients": [
            {
                "name": "boneless, skinless chicken breasts",
                "quantity": "4-6 ounce"
            },
            {
                "name": "fajita seasoning",
                "quantity": "2 tablespoons"
            },
            {
                "name": "olive oil",
                "quantity": "2 tablespoons"
            },
            {
                "name": "red bell pepper",
                "quantity": "1, sliced"
            },
            {
                "name": "yellow bell pepper",
                "quantity": "1, sliced"
            },
            {
                "name": "green bell pepper",
                "quantity": "1, sliced"
            },
            {
                "name": "red onion",
                "quantity": "1, sliced"
            },
            {
                "name": "flour tortillas",
                "quantity": "8"
            },
            {
                "name": "sour cream",
                "quantity": "1/2 cup"
            },
            {
                "name": "shredded cheddar cheese",
                "quantity": "1 cup"
            },
            {
                "name": "salsa",
                "quantity": "1 cup"
            }
        ],
        "instructions": [
            "Preheat grill to medium-high heat.",
            "In a large bowl, mix the chicken breasts with the fajita seasoning and olive oil.",
            "Grill the chicken breasts for 6-7 minutes per side, or until fully cooked.",
            "Grill the sliced bell peppers and onion until tender.",
            "Warm the flour tortillas on the grill for about 30 seconds on each side.",
            "Assemble the fajitas by placing the grilled chicken and vegetables on the warm tortillas.",
            "Top each fajita with a dollop of sour cream, shredded cheddar cheese, and salsa.",
            "Fold the tortillas over the filling and serve."
        ],
        "hints": [
            "Try adding sliced jalapeno peppers for a spicy kick.",
            "For a healthier option, use whole wheat tortillas.",
            "Serve the fajitas with a side of Spanish rice or black beans.",
            "Leftover chicken and vegetables can be stored in an airtight container in the refrigerator for up to 2 days."
        ],
        "image": "36_Grilled_chicken_fajitas.png"
    },
    {
        "id": 37,
        "name": "Fried Rice with Vegetables",
        "serving_size": 4,
        "cooking_time": "20 minutes",
        "ingredients": [
            {
                "name": "long grain white rice",
                "quantity": "2 cups"
            },
            {
                "name": "vegetable oil",
                "quantity": "2 tablespoons"
            },
            {
                "name": "medium onion",
                "quantity": "1, diced"
            },
            {
                "name": "carrots",
                "quantity": "1 cup, diced"
            },
            {
                "name": "frozen peas",
                "quantity": "1 cup"
            },
            {
                "name": "eggs",
                "quantity": "2, beaten"
            },
            {
                "name": "soy sauce",
                "quantity": "2 tablespoons"
            },
            {
                "name": "garlic",
                "quantity": "2 cloves, minced"
            },
            {
                "name": "green onions",
                "quantity": "1/4 cup, sliced"
            },
            {
                "name": "sesame oil",
                "quantity": "1 teaspoon (optional)"
            }
        ],
        "instructions": [
            "Cook the rice according to package instructions.",
            "Heat the vegetable oil in a large skillet or wok over medium heat.",
            "Add the onion and cook until soft, about 3 minutes.",
            "Add the diced carrots and frozen peas and cook for another 2-3 minutes.",
            "Push the vegetables to the sides of the skillet and pour the beaten eggs into the center.",
            "Scramble the eggs until fully cooked and then mix with the vegetables.",
            "Stir in the cooked rice, soy sauce, minced garlic, and sliced green onions.",
            "Cook for an additional 2-3 minutes, or until the ingredients are well combined.",
            "Drizzle with sesame oil before serving (optional)."
        ],
        "hints": [
            "For a protein-packed meal, add diced chicken, shrimp, or tofu to the fried rice.",
            "Try using brown rice for a healthier option.",
            "Add diced bell peppers or mushrooms for extra flavor and nutrients.",
            "Leftover fried rice can be stored in an airtight container in the refrigerator for up to 3 days."
        ],
        "image": "37_Fried_rice_with_vegetables.png"
    },
    {
        "id": 38,
        "name": "Bacon and Egg Breakfast Burrito",
        "serving_size": 4,
        "cooking_time": "20 minutes",
        "ingredients": [
            {
                "name": "flour tortillas",
                "quantity": "4"
            },
            {
                "name": "bacon",
                "quantity": "8 slices"
            },
            {
                "name": "large eggs",
                "quantity": "8"
            },
            {
                "name": "shredded cheddar cheese",
                "quantity": "1 cup"
            },
            {
                "name": "diced tomato",
                "quantity": "1 cup"
            },
            {
                "name": "diced avocado",
                "quantity": "1"
            },
            {
                "name": "hot sauce",
                "quantity": "2 tablespoons (optional)"
            },
            {
                "name": "salt and pepper",
                "quantity": "to taste"
            }
        ],
        "instructions": [
            "Cook the bacon in a large skillet over medium heat until crispy, about 10 minutes.",
            "Remove the bacon from the skillet and set aside.",
            "In the same skillet, scramble the eggs until fully cooked.",
            "Warm the tortillas in the microwave or on a griddle.",
            "Assemble the burritos by dividing the scrambled eggs, bacon, shredded cheese, diced tomato, and avocado among the tortillas.",
            "Sprinkle with salt and pepper to taste.",
            "Fold the sides of the tortilla towards the center and then roll the burrito from the bottom to the top.",
            "Serve with hot sauce on the side (optional)."
        ],
        "hints": [
            "For a spicy twist, add diced jalapenos or use pepper jack cheese instead of cheddar.",
            "Wrap each burrito in aluminum foil for an easy on-the-go breakfast option.",
            "Leftover burritos can be stored in the refrigerator for up to 2 days or in the freezer for up to 2 months.",
            "Try using whole wheat tortillas for a healthier option."
        ],
        "image": "38_Bacon_and_egg_breakfast_burrito.png"
    },
    {
        "id": 39,
        "name": "Creamy Mushroom and Chicken Pasta",
        "serving_size": 4,
        "cooking_time": "25 minutes",
        "ingredients": [
            {
                "name": "penne pasta",
                "quantity": "1 lb"
            },
            {
                "name": "chicken breast",
                "quantity": "2"
            },
            {
                "name": "olive oil",
                "quantity": "2 tablespoons"
            },
            {
                "name": "garlic",
                "quantity": "4 cloves"
            },
            {
                "name": "sliced mushrooms",
                "quantity": "8 oz"
            },
            {
                "name": "chicken broth",
                "quantity": "1 cup"
            },
            {
                "name": "heavy cream",
                "quantity": "1 cup"
            },
            {
                "name": "grated Parmesan cheese",
                "quantity": "1/2 cup"
            },
            {
                "name": "salt and pepper",
                "quantity": "to taste"
            },
            {
                "name": "fresh parsley",
                "quantity": "2 tablespoons (optional)"
            }
        ],
        "instructions": [
            "Cook the pasta according to the package instructions until al dente.",
            "Meanwhile, heat the olive oil in a large skillet over medium heat.",
            "Season the chicken with salt and pepper and add it to the skillet.",
            "Cook the chicken until golden brown and cooked through, about 8-10 minutes.",
            "Remove the chicken from the skillet and set aside.",
            "Add the garlic and mushrooms to the skillet and cook until tender, about 5 minutes.",
            "Stir in the chicken broth, heavy cream, and Parmesan cheese.",
            "Return the chicken to the skillet and cook until heated through.",
            "Toss the sauce with the cooked pasta and serve with fresh parsley (optional)."
        ],
        "hints": [
            "Use cremini mushrooms for a stronger flavor or button mushrooms for a milder flavor.",
            "For a vegetarian option, replace the chicken with extra mushrooms.",
            "Add extra veggies like bell peppers or spinach for extra nutrition.",
            "Use half-and-half or milk instead of heavy cream for a lighter sauce."
        ],
        "image": "39_Creamy_mushroom_and_chicken_pasta.png"
    },
    {
        "id": 40,
        "name": "Grilled Steak with Chimichurri",
        "serving_size": 4,
        "cooking_time": "30 minutes",
        "ingredients": [
            {
                "name": "steak",
                "quantity": "4 (8 oz each)"
            },
            {
                "name": "olive oil",
                "quantity": "2 tablespoons"
            },
            {
                "name": "salt and pepper",
                "quantity": "to taste"
            },
            {
                "name": "fresh parsley",
                "quantity": "1/2 cup"
            },
            {
                "name": "fresh cilantro",
                "quantity": "1/4 cup"
            },
            {
                "name": "fresh oregano",
                "quantity": "1 tablespoon"
            },
            {
                "name": "garlic",
                "quantity": "4 cloves"
            },
            {
                "name": "red wine vinegar",
                "quantity": "2 tablespoons"
            },
            {
                "name": "lemon juice",
                "quantity": "1 lemon"
            },
            {
                "name": "red pepper flakes",
                "quantity": "1/2 teaspoon"
            }
        ],
        "instructions": [
            "Prepare the chimichurri sauce by blending the parsley, cilantro, oregano, garlic, red wine vinegar, lemon juice, red pepper flakes, and 1/4 cup of olive oil in a food processor until smooth.",
            "Season the steak with salt, pepper, and remaining olive oil.",
            "Grill the steak to your desired level of doneness, about 4-5 minutes per side for medium-rare.",
            "Let the steak rest for 5 minutes before slicing.",
            "Serve the steak with the chimichurri sauce on the side."
        ],
        "hints": [
            "Use a thicker cut of steak like ribeye or strip steak for the best results.",
            "For a milder flavor, reduce the amount of red pepper flakes in the chimichurri sauce.",
            "Make the chimichurri sauce a day in advance to allow the flavors to develop.",
            "Leftover chimichurri sauce can be used as a marinade for other meats or as a dressing for salads."
        ],
        "image": "40_Grilled_steak_with_chimichurri.png"
    },
    {
        "id": 41,
        "name": "Baked Chicken and Vegetables",
        "serving_size": 4,
        "cooking_time": "45 minutes",
        "ingredients": [
            {
                "name": "chicken breasts",
                "quantity": "4 (6 oz each)"
            },
            {
                "name": "olive oil",
                "quantity": "2 tablespoons"
            },
            {
                "name": "salt and pepper",
                "quantity": "to taste"
            },
            {
                "name": "carrots",
                "quantity": "2 (sliced)"
            },
            {
                "name": "potatoes",
                "quantity": "2 (diced)"
            },
            {
                "name": "onion",
                "quantity": "1 (diced)"
            },
            {
                "name": "garlic",
                "quantity": "3 cloves (minced)"
            },
            {
                "name": "dried thyme",
                "quantity": "1 teaspoon"
            },
            {
                "name": "chicken broth",
                "quantity": "1/2 cup"
            }
        ],
        "instructions": [
            "Preheat the oven to 400°F.",
            "Season the chicken breasts with salt and pepper.",
            "In a large baking dish, arrange the chicken, carrots, potatoes, and onion.",
            "In a small bowl, mix together the garlic, dried thyme, chicken broth, and olive oil.",
            "Pour the mixture over the chicken and vegetables.",
            "Bake in the preheated oven for 30-35 minutes, or until the chicken is cooked through and the vegetables are tender.",
            "Serve hot."
        ],
        "hints": [
            "Use a mixture of vegetables to add more color and flavor to the dish.",
            "For added crispy texture, place the dish under the broiler for the last 2-3 minutes of cooking.",
            "Add a pinch of red pepper flakes for a bit of heat.",
            "Use chicken thighs instead of chicken breasts for added moisture."
        ],
        "image": "41_Baked_chicken_and_vegetables.png"
    },
    {
        "name": "Creamy Garlic Shrimp",
        "serving_size": 4,
        "cooking_time": "20 minutes",
        "ingredients": [
            {
                "name": "large shrimp",
                "quantity": "1 lb (peeled and deveined)"
            },
            {
                "name": "butter",
                "quantity": "2 tablespoons"
            },
            {
                "name": "olive oil",
                "quantity": "2 tablespoons"
            },
            {
                "name": "garlic",
                "quantity": "6 cloves (minced)"
            },
            {
                "name": "salt and pepper",
                "quantity": "to taste"
            },
            {
                "name": "heavy cream",
                "quantity": "1 cup"
            },
            {
                "name": "parsley",
                "quantity": "1/4 cup (chopped)"
            },
            {
                "name": "lemon juice",
                "quantity": "1 lemon (juiced)"
            }
        ],
        "instructions": [
            "In a large skillet over medium heat, melt the butter with the olive oil.",
            "Add the garlic and cook until fragrant, about 1 minute.",
            "Add the shrimp to the pan and season with salt and pepper.",
            "Cook the shrimp until they turn pink, about 2-3 minutes on each side.",
            "Stir in the heavy cream and bring the mixture to a simmer.",
            "Reduce the heat to low and let the mixture cook for 2-3 minutes, until it has thickened slightly.",
            "Stir in the chopped parsley and lemon juice.",
            "Serve the shrimp over cooked pasta or with crusty bread."
        ],
        "hints": [
            "Use fresh shrimp for the best flavor and texture.",
            "For added flavor, stir in a pinch of red pepper flakes or paprika.",
            "Use low-fat cream to reduce the calorie content.",
            "Substitute dried herbs for the fresh parsley if desired."
        ],
        "id": 42,
        "image": "42_Creamy_garlic_shrimp.png"
    },
    {
        "name": "Lemon Herb Grilled Chicken",
        "serving_size": 4,
        "cooking_time": "20 minutes",
        "ingredients": [
            {
                "name": "chicken breast",
                "quantity": "4 (boneless and skinless)"
            },
            {
                "name": "olive oil",
                "quantity": "2 tablespoons"
            },
            {
                "name": "lemon juice",
                "quantity": "2 lemons (juiced)"
            },
            {
                "name": "salt and pepper",
                "quantity": "to taste"
            },
            {
                "name": "dried thyme",
                "quantity": "1 teaspoon"
            },
            {
                "name": "dried rosemary",
                "quantity": "1 teaspoon"
            },
            {
                "name": "dried basil",
                "quantity": "1 teaspoon"
            },
            {
                "name": "garlic powder",
                "quantity": "1 teaspoon"
            }
        ],
        "instructions": [
            "In a small bowl, whisk together the olive oil, lemon juice, salt, pepper, thyme, rosemary, basil, and garlic powder.",
            "Place the chicken breasts in a large resealable bag and pour the marinade over the chicken.",
            "Let the chicken marinate in the refrigerator for at least 1 hour, or up to 8 hours.",
            "Preheat the grill to medium-high heat.",
            "Remove the chicken from the marinade and discard the remaining marinade.",
            "Grill the chicken for 6-8 minutes on each side, or until the internal temperature reaches 165°F.",
            "Let the chicken rest for 5 minutes before serving."
        ],
        "hints": [
            "For added flavor, add minced garlic to the marinade.",
            "Serve the chicken with a side of rice, roasted vegetables, or a salad.",
            "For a crispier skin, remove the chicken from the marinade, but do not pat dry before grilling.",
            "Substitute dried herbs for the fresh herbs if desired."
        ],
        "id": 43,
        "image": "43_Lemon_herb_grilled_chicken.png"
    },
    {
        "name": "Lemon Chicken Piccata",
        "serving_size": 4,
        "cooking_time": "30 minutes",
        "ingredients": [
            {
                "name": "chicken breast",
                "quantity": "4 (skinless and boneless)"
            },
            {
                "name": "all-purpose flour",
                "quantity": "1/2 cup"
            },
            {
                "name": "salt and pepper",
                "quantity": "to taste"
            },
            {
                "name": "olive oil",
                "quantity": "2 tablespoons"
            },
            {
                "name": "butter",
                "quantity": "2 tablespoons"
            },
            {
                "name": "lemon juice",
                "quantity": "2 lemons (juiced)"
            },
            {
                "name": "chicken broth",
                "quantity": "1 cup"
            },
            {
                "name": "capers",
                "quantity": "2 tablespoons (drained)"
            },
            {
                "name": "parsley",
                "quantity": "1/4 cup (chopped)"
            }
        ],
        "instructions": [
            "In a shallow dish, whisk together the flour, salt, and pepper.",
            "Dredge each chicken breast in the flour mixture.",
            "In a large skillet over medium heat, heat the olive oil and butter until hot.",
            "Add the chicken breasts to the skillet and cook for 4-5 minutes on each side, or until golden brown and cooked through.",
            "Remove the chicken from the skillet and set aside on a plate.",
            "In the same skillet, add the lemon juice, chicken broth, and capers.",
            "Stir the mixture and bring it to a simmer.",
            "Return the chicken to the skillet and spoon the sauce over the chicken.",
            "Sprinkle with chopped parsley before serving."
        ],
        "hints": [
            "For added flavor, add a pinch of garlic powder to the flour mixture.",
            "Serve the chicken with a side of pasta, rice, or roasted vegetables.",
            "For a thicker sauce, whisk together 1 tablespoon of cornstarch with 2 tablespoons of water and add to the skillet with the lemon juice and chicken broth.",
            "Substitute chicken thighs for chicken breasts if desired."
        ],
        "id": 44,
        "image": "44_Lemon_chicken_piccata.png"
    },
    {
        "name": "BBQ Chicken Pizza",
        "serving_size": 4,
        "cooking_time": "20 minutes",
        "ingredients": [
            {
                "name": "pizza dough",
                "quantity": "1 (store-bought or homemade)"
            },
            {
                "name": "barbecue sauce",
                "quantity": "1/2 cup"
            },
            {
                "name": "chicken breast",
                "quantity": "2 (cooked and shredded)"
            },
            {
                "name": "red onion",
                "quantity": "1/2 (sliced)"
            },
            {
                "name": "bell pepper",
                "quantity": "1 (sliced)"
            },
            {
                "name": "cheddar cheese",
                "quantity": "1 cup (shredded)"
            },
            {
                "name": "mozzarella cheese",
                "quantity": "1 cup (shredded)"
            }
        ],
        "instructions": [
            "Preheat the oven to 450°F.",
            "Roll out the pizza dough on a lightly floured surface to desired thickness.",
            "Spread the barbecue sauce evenly over the pizza dough.",
            "Add the shredded chicken, sliced red onion, and sliced bell pepper over the sauce.",
            "Sprinkle the cheddar cheese and mozzarella cheese on top.",
            "Bake for 10-15 minutes, or until the crust is golden brown and the cheese is melted and bubbly.",
            "Remove from the oven and let cool for a few minutes before slicing and serving."
        ],
        "hints": [
            "For a crispier crust, brush the crust with olive oil before baking.",
            "Experiment with different varieties of cheese, such as gouda or feta.",
            "Use homemade pizza dough for a fresher taste.",
            "Add additional toppings, such as sliced jalapenos or sliced mushrooms, for extra flavor and texture."
        ],
        "id": 45,
        "image": "45_Bbq_chicken_pizza.png"
    },
    {
        "name": "Grilled Vegetable Quesadilla",
        "serving_size": 4,
        "cooking_time": "20 minutes",
        "ingredients": [
            {
                "name": "flour tortillas",
                "quantity": "8"
            },
            {
                "name": "bell peppers",
                "quantity": "2 (sliced)"
            },
            {
                "name": "zucchini",
                "quantity": "1 (sliced)"
            },
            {
                "name": "yellow onion",
                "quantity": "1/2 (sliced)"
            },
            {
                "name": "olive oil",
                "quantity": "2 tablespoons"
            },
            {
                "name": "salt",
                "quantity": "1/2 teaspoon"
            },
            {
                "name": "black pepper",
                "quantity": "1/4 teaspoon"
            },
            {
                "name": "cheddar cheese",
                "quantity": "2 cups (shredded)"
            },
            {
                "name": "monterey jack cheese",
                "quantity": "2 cups (shredded)"
            }
        ],
        "instructions": [
            "Preheat a grill or grill pan over medium heat.",
            "Toss the bell peppers, zucchini, and yellow onion with the olive oil, salt, and black pepper.",
            "Grill the vegetables until they are tender and slightly charred, about 5-7 minutes.",
            "On one half of each tortilla, sprinkle an equal amount of cheddar cheese and monterey jack cheese.",
            "Add the grilled vegetables on top of the cheese.",
            "Fold the other half of the tortilla over the filling to create a half-moon shape.",
            "Grill the quesadillas until the cheese is melted and the tortilla is crispy and golden brown, about 3-5 minutes on each side.",
            "Cut each quesadilla into wedges and serve hot."
        ],
        "hints": [
            "Use a mixture of different types of cheese for extra flavor, such as gouda or pepper jack.",
            "Experiment with different vegetables, such as mushrooms or eggplant.",
            "Add additional toppings, such as avocado or salsa, for extra flavor and texture.",
            "Brush the tortilla with olive oil for a crispy texture."
        ],
        "id": 46,
        "image": "46_Grilled_vegetable_quesadilla.png"
    },
    {
        "name": "Crispy Chicken Tenders",
        "serving_size": 4,
        "cooking_time": "25 minutes",
        "ingredients": [
            {
                "name": "chicken breast tenders",
                "quantity": "1 pound"
            },
            {
                "name": "all-purpose flour",
                "quantity": "1 cup"
            },
            {
                "name": "garlic powder",
                "quantity": "1 teaspoon"
            },
            {
                "name": "onion powder",
                "quantity": "1 teaspoon"
            },
            {
                "name": "paprika",
                "quantity": "1 teaspoon"
            },
            {
                "name": "salt",
                "quantity": "1/2 teaspoon"
            },
            {
                "name": "black pepper",
                "quantity": "1/4 teaspoon"
            },
            {
                "name": "large eggs",
                "quantity": "2"
            },
            {
                "name": "panko breadcrumbs",
                "quantity": "1 cup"
            },
            {
                "name": "vegetable oil",
                "quantity": "1/2 cup"
            }
        ],
        "instructions": [
            "Preheat the oven to 400°F (200°C) and line a baking sheet with parchment paper.",
            "In a shallow dish, mix together the flour, garlic powder, onion powder, paprika, salt, and black pepper.",
            "In a separate shallow dish, beat the eggs.",
            "In a third shallow dish, place the panko breadcrumbs.",
            "Dredge each chicken tender in the flour mixture, then dip it in the eggs, and finally coat it in the panko breadcrumbs.",
            "Heat the vegetable oil in a large skillet over medium heat.",
            "Fry the chicken tenders until they are golden brown and crispy, about 3-4 minutes on each side.",
            "Place the fried chicken tenders on the prepared baking sheet and bake in the oven for 8-10 minutes, or until cooked through.",
            "Serve the chicken tenders with your favorite dipping sauce."
        ],
        "hints": [
            "For extra flavor, season the flour mixture with herbs such as basil or thyme.",
            "For a healthier version, bake the chicken tenders instead of frying them.",
            "For a crunchier texture, double coat the chicken tenders in the panko breadcrumbs.",
            "Serve the chicken tenders with dipping sauces such as honey mustard or ranch."
        ],
        "id": 47,
        "image": "47_Crispy_chicken_tenders.png"
    },
    {
        "name": "Spicy Black Bean and Corn Tacos",
        "servings": 4,
        "prep_time": "10 minutes",
        "cook_time": "20 minutes",
        "ingredients": [
            {
                "name": "black beans",
                "amount": "1 can (15 ounces)"
            },
            {
                "name": "frozen corn kernels",
                "amount": "1 cup"
            },
            {
                "name": "red onion",
                "amount": "1/2 cup, diced"
            },
            {
                "name": "red bell pepper",
                "amount": "1/2 cup, diced"
            },
            {
                "name": "jalapeno pepper",
                "amount": "1, seeded and minced"
            },
            {
                "name": "garlic",
                "amount": "3 cloves, minced"
            },
            {
                "name": "cumin",
                "amount": "1 teaspoon"
            },
            {
                "name": "chili powder",
                "amount": "1 teaspoon"
            },
            {
                "name": "salt",
                "amount": "1/2 teaspoon"
            },
            {
                "name": "black pepper",
                "amount": "1/4 teaspoon"
            },
            {
                "name": "lime juice",
                "amount": "2 tablespoons"
            },
            {
                "name": "tortillas",
                "amount": "8 (6-inch)"
            },
            {
                "name": "shredded cheese",
                "amount": "1/2 cup"
            },
            {
                "name": "sour cream",
                "amount": "1/4 cup (optional)"
            },
            {
                "name": "fresh cilantro",
                "amount": "1/4 cup, chopped (optional)"
            }
        ],
        "instructions": [
            "In a large skillet, heat a drizzle of oil over medium heat. Add the black beans, corn, onion, bell pepper, jalapeno, and garlic. Cook, stirring occasionally, until the vegetables are soft, about 5 minutes.",
            "Stir in the cumin, chili powder, salt, and pepper. Cook for another minute.",
            "Stir in the lime juice. Taste and adjust seasoning as needed.",
            "Warm the tortillas in a large dry skillet over medium heat. Spoon the black bean mixture down the center of each tortilla. Sprinkle with cheese.",
            "Fold the sides of the tortilla over the filling and press gently to seal. Cook until the cheese is melted and the tortilla is crispy, about 3 minutes per side.",
            "Serve with sour cream and cilantro, if desired."
        ],
        "hints": [
            "For a spicier flavor, leave some or all of the seeds in the jalapeno pepper.",
            "For a creamier texture, mash some of the black beans before adding to the skillet.",
            "For a crispy exterior, brush the outside of the tortilla with oil before cooking.",
            "For a more filling meal, add diced avocado, diced tomato, or sliced lettuce to the tacos."
        ],
        "id": 48,
        "image": "48_Spicy_black_bean_and_corn_tacos.png"
    },
    {
        "name": "Beef and Broccoli Stir-fry",
        "ingredients": [
            {
                "name": "beef sirloin",
                "amount": "1 lb"
            },
            {
                "name": "broccoli florets",
                "amount": "4 cups"
            },
            {
                "name": "soy sauce",
                "amount": "3 tablespoons"
            },
            {
                "name": "oyster sauce",
                "amount": "2 tablespoons"
            },
            {
                "name": "brown sugar",
                "amount": "1 tablespoon"
            },
            {
                "name": "cornstarch",
                "amount": "2 teaspoons"
            },
            {
                "name": "vegetable oil",
                "amount": "2 tablespoons"
            },
            {
                "name": "garlic",
                "amount": "4 cloves"
            },
            {
                "name": "ginger",
                "amount": "1 inch"
            }
        ],
        "instructions": [
            "Cut beef into thin slices and marinate in 1 tablespoon of soy sauce and 1 teaspoon of cornstarch for 30 minutes.",
            "Mix together the remaining soy sauce, oyster sauce, and brown sugar.",
            "In a wok or large pan, heat the oil over high heat. Add garlic and ginger and stir-fry for 30 seconds.",
            "Add the beef to the pan and stir-fry until browned, about 3 minutes.",
            "Add the broccoli and stir-fry for another 2-3 minutes until the broccoli is tender.",
            "Pour in the sauce and stir until everything is evenly coated and the sauce has thickened, about 1 minute.",
            "Serve over rice."
        ],
        "hints": [
            "For extra flavor, add a pinch of red pepper flakes to the stir-fry.",
            "If the sauce is too thick, add a splash of water or chicken broth to thin it out.",
            "For a healthier option, use low-sodium soy sauce and opt for brown rice instead of white."
        ],
        "id": 49,
        "image": "49_Beef_and_broccoli_stir-fry.png"
    },
    {
        "name": "Chicken Pot Pie",
        "ingredients": [
            {
                "name": "butter",
                "amount": "1/2 cup"
            },
            {
                "name": "onion",
                "amount": "1 medium"
            },
            {
                "name": "carrots",
                "amount": "2 medium"
            },
            {
                "name": "celery",
                "amount": "2 stalks"
            },
            {
                "name": "all-purpose flour",
                "amount": "1/4 cup"
            },
            {
                "name": "chicken broth",
                "amount": "2 cups"
            },
            {
                "name": "milk",
                "amount": "1 cup"
            },
            {
                "name": "salt",
                "amount": "1 teaspoon"
            },
            {
                "name": "black pepper",
                "amount": "1/2 teaspoon"
            },
            {
                "name": "frozen peas and carrots",
                "amount": "2 cups"
            },
            {
                "name": "cooked chicken",
                "amount": "3 cups"
            },
            {
                "name": "pie crusts",
                "amount": "2 (9-inch)"
            },
            {
                "name": "large egg",
                "amount": "1"
            }
        ],
        "instructions": [
            "Preheat oven to 400°F (200°C).",
            "In a large saucepan, melt butter over medium heat. Add onion, carrots, and celery and cook until tender, about 8 minutes.",
            "Stir in flour until evenly combined.",
            "Gradually stir in chicken broth and milk and bring to a boil. Cook and stir for 2 minutes until thickened.",
            "Stir in salt, pepper, frozen peas and carrots, and cooked chicken.",
            "Pour mixture into a 9-inch pie dish.",
            "Unroll pie crusts and place over mixture, trimming and fluting the edges.",
            "Beat egg in a small bowl and brush over crusts.",
            "Bake for 30-35 minutes or until crusts are golden brown.",
            "Let cool for 10 minutes before serving."
        ],
        "hints": [
            "Use refrigerated pie crusts for a flakier crust.",
            "For a crispy crust, brush the edges of the crust with melted butter before baking.",
            "For a twist, add some chopped herbs, such as thyme or rosemary, to the filling.",
            "Leftover pot pie can be stored in the refrigerator for up to 3 days or in the freezer for up to 2 months."
        ],
        "id": 50,
        "image": "50_Chicken_pot_pie.png"
    },
    {
        "name": "Creamy Pesto Chicken",
        "ingredients": [
            {
                "name": "chicken breasts",
                "amount": "4 boneless, skinless"
            },
            {
                "name": "salt",
                "amount": "1/2 teaspoon"
            },
            {
                "name": "black pepper",
                "amount": "1/2 teaspoon"
            },
            {
                "name": "olive oil",
                "amount": "2 tablespoons"
            },
            {
                "name": "garlic",
                "amount": "4 cloves"
            },
            {
                "name": "heavy cream",
                "amount": "1 cup"
            },
            {
                "name": "pesto sauce",
                "amount": "1/2 cup"
            },
            {
                "name": "grated Parmesan cheese",
                "amount": "1/2 cup"
            },
            {
                "name": "lemon",
                "amount": "1"
            },
            {
                "name": "fresh basil leaves",
                "amount": "1/4 cup"
            }
        ],
        "instructions": [
            "Season chicken breasts with salt and pepper.",
            "In a large skillet, heat olive oil over medium heat. Add chicken breasts and cook until browned, about 4 minutes on each side.",
            "Add garlic and cook for 1 minute until fragrant.",
            "Stir in heavy cream, pesto sauce, and Parmesan cheese.",
            "Squeeze lemon juice into the skillet and stir to combine.",
            "Reduce heat to low and let simmer for 8-10 minutes or until chicken is cooked through.",
            "Garnish with fresh basil leaves and serve with pasta or rice."
        ],
        "hints": [
            "For a thicker sauce, stir in a cornstarch slurry (1 tablespoon cornstarch mixed with 2 tablespoons water) before adding the heavy cream.",
            "Use store-bought or homemade pesto sauce, depending on your preference.",
            "For a milder flavor, use half basil pesto and half sun-dried tomato pesto.",
            "Leftover creamy pesto chicken can be stored in the refrigerator for up to 3 days or in the freezer for up to 2 months."
        ],
        "id": 51,
        "image": "51_Creamy_pesto_chicken.png"
    },
    {
        "name": "Chili Con Carne",
        "servings": 6,
        "cooking_time": "1 hour 30 minutes",
        "ingredients": [
            {
                "name": "ground beef",
                "quantity": "1 pound"
            },
            {
                "name": "onion",
                "quantity": "1 large, chopped"
            },
            {
                "name": "garlic",
                "quantity": "3 cloves, minced"
            },
            {
                "name": "canned diced tomatoes",
                "quantity": "14.5 ounces"
            },
            {
                "name": "red kidney beans",
                "quantity": "15 ounces, drained and rinsed"
            },
            {
                "name": "chili powder",
                "quantity": "2 tablespoons"
            },
            {
                "name": "ground cumin",
                "quantity": "1 tablespoon"
            },
            {
                "name": "salt",
                "quantity": "1 teaspoon"
            },
            {
                "name": "black pepper",
                "quantity": "1/2 teaspoon"
            }
        ],
        "instructions": [
            "In a large pot or Dutch oven, cook ground beef over medium heat until browned, about 5 minutes. Drain any excess fat.",
            "Add the onion and garlic to the pot and cook until the onion is soft and translucent, about 5 minutes.",
            "Stir in the diced tomatoes, kidney beans, chili powder, cumin, salt, and pepper.",
            "Bring the mixture to a simmer and let cook for 1 hour, stirring occasionally.",
            "Taste and adjust seasonings as necessary.",
            "Serve hot with desired toppings such as shredded cheese, sour cream, or chopped green onions."
        ],
        "hints": [
            "For a thicker chili, add 1/4 cup of masa harina (corn flour) to the pot in the last 15 minutes of cooking.",
            "To add a smoky flavor, use diced green chilies instead of diced tomatoes.",
            "For a spicier chili, add more chili powder or diced jalapenos.",
            "For a vegetarian version, substitute the ground beef with crumbled tofu or chopped mushrooms."
        ],
        "id": 52,
        "image": "52_Chili_con_carne.png"
    },
    {
        "name": "Grilled Shrimp Skewers",
        "servings": 4,
        "cooking_time": "20 minutes",
        "ingredients": [
            {
                "name": "jumbo shrimp",
                "quantity": "1 pound, peeled and deveined"
            },
            {
                "name": "olive oil",
                "quantity": "2 tablespoons"
            },
            {
                "name": "lemon juice",
                "quantity": "2 tablespoons"
            },
            {
                "name": "garlic",
                "quantity": "2 cloves, minced"
            },
            {
                "name": "dried oregano",
                "quantity": "1 teaspoon"
            },
            {
                "name": "salt",
                "quantity": "1/2 teaspoon"
            },
            {
                "name": "black pepper",
                "quantity": "1/4 teaspoon"
            }
        ],
        "instructions": [
            "In a large bowl, whisk together the olive oil, lemon juice, garlic, oregano, salt, and pepper.",
            "Add the shrimp to the bowl and toss to coat with the marinade.",
            "Cover and refrigerate for at least 30 minutes, or up to 2 hours.",
            "Preheat grill to high heat.",
            "Thread the shrimp onto skewers, leaving a little space between each shrimp.",
            "Grill the skewers for 2-3 minutes on each side, or until the shrimp are pink and cooked through.",
            "Serve hot with lemon wedges and additional salt and pepper, if desired."
        ],
        "hints": [
            "For wooden skewers, soak in water for 30 minutes before using to prevent them from burning on the grill.",
            "To make a spicy version, add red pepper flakes to the marinade.",
            "For added flavor, use fresh herbs such as parsley or cilantro in the marinade.",
            "For a complete meal, serve the shrimp skewers with rice or vegetables on the side."
        ],
        "id": 53,
        "image": "53_Grilled_shrimp_skewers.png"
    },
    {
        "name": "Creamy Basil and Tomato Pasta",
        "servings": 4,
        "cooking_time": "20 minutes",
        "ingredients": [
            {
                "name": "penne pasta",
                "quantity": "1 pound"
            },
            {
                "name": "cherry tomatoes",
                "quantity": "1 pint, halved"
            },
            {
                "name": "heavy cream",
                "quantity": "1 cup"
            },
            {
                "name": "basil leaves",
                "quantity": "1/2 cup, chopped"
            },
            {
                "name": "Parmesan cheese",
                "quantity": "1/2 cup, grated"
            },
            {
                "name": "garlic",
                "quantity": "2 cloves, minced"
            },
            {
                "name": "salt",
                "quantity": "1/2 teaspoon"
            },
            {
                "name": "black pepper",
                "quantity": "1/4 teaspoon"
            }
        ],
        "instructions": [
            "Cook the pasta according to package instructions until al dente.",
            "Drain and set aside.",
            "In a large saucepan, heat the heavy cream over medium heat.",
            "Stir in the basil, Parmesan cheese, garlic, salt, and pepper.",
            "Cook, stirring occasionally, until the cheese is melted and the sauce is heated through, about 5 minutes.",
            "Stir in the cherry tomatoes.",
            "Add the pasta to the saucepan and toss to coat with the sauce.",
            "Serve hot with additional Parmesan cheese and freshly ground black pepper, if desired."
        ],
        "hints": [
            "For a vegan version, substitute the heavy cream with coconut cream and the Parmesan cheese with nutritional yeast.",
            "For a spicy version, add red pepper flakes to the sauce.",
            "For added texture, stir in chopped sun-dried tomatoes or roasted red peppers.",
            "To make it a complete meal, add cooked chicken, shrimp, or vegetables to the pasta."
        ],
        "id": 54,
        "image": "54_Creamy_basil_and_tomato_pasta.png"
    },
    {
        "name": "Vegetable Soup",
        "servings": 6,
        "cooking_time": "30 minutes",
        "ingredients": [
            {
                "name": "olive oil",
                "quantity": "2 tablespoons"
            },
            {
                "name": "onion",
                "quantity": "1, chopped"
            },
            {
                "name": "carrots",
                "quantity": "2, chopped"
            },
            {
                "name": "celery",
                "quantity": "2 stalks, chopped"
            },
            {
                "name": "potatoes",
                "quantity": "2, chopped"
            },
            {
                "name": "tomatoes",
                "quantity": "2, chopped"
            },
            {
                "name": "green beans",
                "quantity": "1 cup, chopped"
            },
            {
                "name": "vegetable broth",
                "quantity": "6 cups"
            },
            {
                "name": "salt",
                "quantity": "1/2 teaspoon"
            },
            {
                "name": "black pepper",
                "quantity": "1/4 teaspoon"
            },
            {
                "name": "dried thyme",
                "quantity": "1 teaspoon"
            },
            {
                "name": "dried basil",
                "quantity": "1 teaspoon"
            }
        ],
        "instructions": [
            "In a large pot, heat the olive oil over medium heat.",
            "Add the onion, carrots, and celery and cook until softened, about 5 minutes.",
            "Stir in the potatoes, tomatoes, green beans, vegetable broth, salt, pepper, thyme, and basil.",
            "Bring the soup to a boil, then reduce the heat and let it simmer for 15-20 minutes, or until the vegetables are tender.",
            "Serve hot with crusty bread or crackers, if desired."
        ],
        "hints": [
            "For a creamier soup, puree half of the soup in a blender or food processor before serving.",
            "For added protein, add cooked chicken, beef, or beans to the soup.",
            "For a vegetarian or vegan version, use a vegetable broth or water instead of chicken broth.",
            "For added flavor, use fresh herbs such as rosemary or parsley in place of dried herbs."
        ],
        "id": 55,
        "image": "55_Vegetable_soup.png"
    },
    {
        "name": "Chicken Noodle Soup",
        "servings": 6,
        "cooking_time": "45 minutes",
        "ingredients": [
            {
                "name": "olive oil",
                "quantity": "2 tablespoons"
            },
            {
                "name": "onion",
                "quantity": "1, chopped"
            },
            {
                "name": "carrots",
                "quantity": "2, chopped"
            },
            {
                "name": "celery",
                "quantity": "2 stalks, chopped"
            },
            {
                "name": "garlic",
                "quantity": "2 cloves, minced"
            },
            {
                "name": "chicken broth",
                "quantity": "8 cups"
            },
            {
                "name": "chicken breasts",
                "quantity": "2, boneless and skinless"
            },
            {
                "name": "egg noodles",
                "quantity": "2 cups"
            },
            {
                "name": "salt",
                "quantity": "1/2 teaspoon"
            },
            {
                "name": "black pepper",
                "quantity": "1/4 teaspoon"
            },
            {
                "name": "dried thyme",
                "quantity": "1 teaspoon"
            },
            {
                "name": "dried basil",
                "quantity": "1 teaspoon"
            }
        ],
        "instructions": [
            "In a large pot, heat the olive oil over medium heat.",
            "Add the onion, carrots, celery, and garlic and cook until softened, about 5 minutes.",
            "Stir in the chicken broth and bring to a boil.",
            "Add the chicken breasts and let them cook until no longer pink in the center, about 15 minutes.",
            "Remove the chicken breasts from the pot and let them cool.",
            "Shred the chicken and set it aside.",
            "Add the egg noodles to the pot and let them cook until tender, about 8-10 minutes.",
            "Stir in the shredded chicken, salt, pepper, thyme, and basil.",
            "Serve hot with crusty bread or crackers, if desired."
        ],
        "hints": [
            "For a creamier soup, add heavy cream or half-and-half to the pot before serving.",
            "For added flavor, use fresh herbs such as rosemary or parsley in place of dried herbs.",
            "For a gluten-free version, use gluten-free noodles or replace the noodles with cooked rice or quinoa.",
            "For added vegetables, add chopped spinach, kale, or zucchini to the pot before serving."
        ],
        "id": 56,
        "image": "56_Chicken_noodle_soup.png"
    },
    {
        "name": "Pizza Dough",
        "servings": 4,
        "cooking_time": "15 minutes (plus 1 hour rise time)",
        "ingredients": [
            {
                "name": "warm water",
                "quantity": "1 cup"
            },
            {
                "name": "active dry yeast",
                "quantity": "2 1/4 teaspoons"
            },
            {
                "name": "sugar",
                "quantity": "1 tablespoon"
            },
            {
                "name": "all-purpose flour",
                "quantity": "3 cups"
            },
            {
                "name": "salt",
                "quantity": "1 teaspoon"
            },
            {
                "name": "olive oil",
                "quantity": "2 tablespoons"
            }
        ],
        "instructions": [
            "In a large bowl, combine the warm water, yeast, and sugar.",
            "Stir to combine and let the mixture sit for 5-10 minutes until it becomes foamy.",
            "Add the flour, salt, and olive oil to the bowl and mix until a dough forms.",
            "Turn the dough out onto a floured surface and knead for 5-7 minutes until it is smooth and elastic.",
            "Place the dough in a greased bowl, cover with plastic wrap, and let it rise in a warm place for 1 hour.",
            "Once the dough has risen, punch it down and turn it out onto a floured surface.",
            "Divide the dough into 4 equal portions and shape each portion into a ball.",
            "Use a rolling pin or your hands to flatten each ball into a thin, round crust.",
            "Top the crust with your desired toppings and bake in a preheated 425°F oven for 10-12 minutes, or until the crust is golden brown."
        ],
        "hints": [
            "For a crispier crust, preheat a pizza stone or baking sheet in the oven before baking the pizza.",
            "For a softer crust, let the dough rise for an additional 30 minutes before shaping and baking.",
            "For added flavor, add herbs such as oregano, basil, or garlic to the dough before kneading.",
            "For a healthier version, use whole wheat flour or a combination of all-purpose and whole wheat flour in place of all-purpose flour."
        ],
        "id": 57,
        "image": "57_Pizza_dough.png"
    },
    {
        "name": "Grilled Pork Chops",
        "servings": 4,
        "cooking_time": "20 minutes",
        "ingredients": [
            {
                "name": "pork chops",
                "quantity": "4, 1-inch thick"
            },
            {
                "name": "salt",
                "quantity": "1 teaspoon"
            },
            {
                "name": "black pepper",
                "quantity": "1 teaspoon"
            },
            {
                "name": "garlic powder",
                "quantity": "1 teaspoon"
            },
            {
                "name": "olive oil",
                "quantity": "1 tablespoon"
            }
        ],
        "instructions": [
            "Season the pork chops with salt, pepper, and garlic powder on both sides.",
            "Heat a grill or grill pan to medium-high heat.",
            "Brush the pork chops with olive oil.",
            "Place the pork chops on the hot grill and cook for 4-5 minutes on each side, or until the internal temperature reaches 145°F.",
            "Remove the pork chops from the grill and let them rest for 5 minutes before serving."
        ],
        "hints": [
            "For added flavor, marinate the pork chops for 30 minutes to 2 hours in your favorite marinade before grilling.",
            "For a crispier texture, brush the pork chops with oil and sprinkle with breadcrumbs before grilling.",
            "For added moisture, baste the pork chops with a mixture of melted butter and your favorite herbs during grilling.",
            "To avoid drying out the pork chops, do not overcook them. Use a meat thermometer to check the internal temperature."
        ],
        "id": 58,
        "image": "58_Grilled_pork_chops.png"
    },
    {
        "name": "Minestrone Soup",
        "servings": 6,
        "cooking_time": "45 minutes",
        "ingredients": [
            {
                "name": "olive oil",
                "quantity": "2 tablespoons"
            },
            {
                "name": "onion",
                "quantity": "1, diced"
            },
            {
                "name": "carrots",
                "quantity": "2, diced"
            },
            {
                "name": "celery",
                "quantity": "2 stalks, diced"
            },
            {
                "name": "garlic",
                "quantity": "3 cloves, minced"
            },
            {
                "name": "diced tomatoes",
                "quantity": "14 oz can"
            },
            {
                "name": "chicken or vegetable broth",
                "quantity": "6 cups"
            },
            {
                "name": "cannellini beans",
                "quantity": "14 oz can, drained and rinsed"
            },
            {
                "name": "small pasta, such as elbow macaroni",
                "quantity": "1 cup"
            },
            {
                "name": "fresh spinach",
                "quantity": "2 cups, chopped"
            },
            {
                "name": "basil",
                "quantity": "1/4 cup, chopped"
            },
            {
                "name": "salt",
                "quantity": "1 teaspoon"
            },
            {
                "name": "black pepper",
                "quantity": "1 teaspoon"
            }
        ],
        "instructions": [
            "In a large pot, heat the olive oil over medium heat.",
            "Add the onion, carrots, celery, and garlic to the pot and cook for 5 minutes, or until the vegetables are softened.",
            "Add the diced tomatoes, broth, beans, pasta, spinach, basil, salt, and pepper to the pot and bring to a boil.",
            "Reduce heat and let the soup simmer for 20-25 minutes, or until the pasta is tender.",
            "Taste and adjust seasonings as needed.",
            "Serve the soup hot, garnished with freshly grated Parmesan cheese and additional basil if desired."
        ],
        "hints": [
            "For added flavor, add a Parmesan cheese rind to the soup while it simmers.",
            "For a thicker soup, puree a portion of the soup before serving.",
            "For a vegetarian version, use vegetable broth and omit the Parmesan cheese.",
            "For added protein, add cooked chicken, sausage, or pancetta to the soup."
        ],
        "id": 59,
        "image": "59_Minestrone_soup.png"
    },
    {
        "name": "Potato Salad",
        "servings": 6,
        "cooking_time": "30 minutes",
        "ingredients": [
            {
                "name": "potatoes",
                "quantity": "6 medium, peeled and diced"
            },
            {
                "name": "mayonnaise",
                "quantity": "1 cup"
            },
            {
                "name": "Dijon mustard",
                "quantity": "2 tablespoons"
            },
            {
                "name": "apple cider vinegar",
                "quantity": "2 tablespoons"
            },
            {
                "name": "sugar",
                "quantity": "1 teaspoon"
            },
            {
                "name": "salt",
                "quantity": "1 teaspoon"
            },
            {
                "name": "black pepper",
                "quantity": "1/2 teaspoon"
            },
            {
                "name": "celery",
                "quantity": "2 stalks, diced"
            },
            {
                "name": "red onion",
                "quantity": "1/2, diced"
            },
            {
                "name": "pickles",
                "quantity": "1/2 cup, diced"
            },
            {
                "name": "hard-boiled eggs",
                "quantity": "4, diced"
            },
            {
                "name": "parsley",
                "quantity": "1/4 cup, chopped"
            }
        ],
        "instructions": [
            "Place the diced potatoes in a large pot and cover with water.",
            "Bring the water to a boil, then reduce heat and let the potatoes simmer for 10-15 minutes, or until tender.",
            "Drain the potatoes and let them cool.",
            "In a large bowl, whisk together the mayonnaise, mustard, vinegar, sugar, salt, and pepper.",
            "Add the cooled potatoes, celery, red onion, pickles, eggs, and parsley to the bowl with the dressing and stir to combine.",
            "Refrigerate the potato salad for at least 30 minutes, or until chilled.",
            "Taste and adjust seasonings as needed before serving."
        ],
        "hints": [
            "For added flavor, add chopped fresh herbs such as dill or chives to the potato salad.",
            "For a lighter version, use light mayonnaise and substitute Greek yogurt for some of the mayonnaise.",
            "For a gluten-free version, use gluten-free mustard.",
            "For added texture, add diced red bell pepper or crumbled bacon to the potato salad."
        ],
        "id": 60,
        "image": "60_Potato_salad.png"
    },
    {
        "name": "Coleslaw",
        "servings": 6,
        "cooking_time": "15 minutes",
        "ingredients": [
            {
                "name": "green cabbage",
                "quantity": "1/2 head, shredded"
            },
            {
                "name": "carrots",
                "quantity": "2, grated"
            },
            {
                "name": "mayonnaise",
                "quantity": "1/2 cup"
            },
            {
                "name": "sugar",
                "quantity": "2 tablespoons"
            },
            {
                "name": "apple cider vinegar",
                "quantity": "2 tablespoons"
            },
            {
                "name": "salt",
                "quantity": "1/2 teaspoon"
            },
            {
                "name": "black pepper",
                "quantity": "1/4 teaspoon"
            }
        ],
        "instructions": [
            "In a large bowl, combine the shredded cabbage and grated carrots.",
            "In a separate bowl, whisk together the mayonnaise, sugar, vinegar, salt, and pepper.",
            "Pour the dressing over the cabbage mixture and stir until well combined.",
            "Refrigerate the coleslaw for at least 30 minutes, or until chilled.",
            "Taste and adjust seasonings as needed before serving."
        ],
        "hints": [
            "For added flavor, add diced red onion or grated apple to the coleslaw.",
            "For a spicier version, add a diced jalapeno or a pinch of cayenne pepper to the dressing.",
            "For a lighter version, use light mayonnaise and substitute Greek yogurt for some of the mayonnaise.",
            "For a gluten-free version, use gluten-free vinegar."
        ],
        "id": 61,
        "image": "61_Coleslaw.png"
    },
    {
        "name": "Barbecue Sauce",
        "servings": 8,
        "cooking_time": "30 minutes",
        "ingredients": [
            {
                "name": "ketchup",
                "quantity": "1 cup"
            },
            {
                "name": "brown sugar",
                "quantity": "1/2 cup"
            },
            {
                "name": "apple cider vinegar",
                "quantity": "1/4 cup"
            },
            {
                "name": "molasses",
                "quantity": "2 tablespoons"
            },
            {
                "name": "Worcestershire sauce",
                "quantity": "1 tablespoon"
            },
            {
                "name": "mustard",
                "quantity": "1 tablespoon"
            },
            {
                "name": "garlic powder",
                "quantity": "1 teaspoon"
            },
            {
                "name": "onion powder",
                "quantity": "1 teaspoon"
            },
            {
                "name": "smoked paprika",
                "quantity": "1 teaspoon"
            },
            {
                "name": "cayenne pepper",
                "quantity": "1/4 teaspoon (optional)"
            },
            {
                "name": "salt",
                "quantity": "1/2 teaspoon"
            },
            {
                "name": "black pepper",
                "quantity": "1/4 teaspoon"
            }
        ],
        "instructions": [
            "In a medium saucepan, whisk together all the ingredients.",
            "Bring the mixture to a boil over medium heat, then reduce the heat and simmer for 20-30 minutes, or until thickened and the flavors have melded together.",
            "Remove from heat and let cool.",
            "The sauce can be stored in an airtight container in the refrigerator for up to 2 weeks."
        ],
        "hints": [
            "For a sweeter sauce, add more brown sugar.",
            "For a tangier sauce, add more vinegar.",
            "For a smokier flavor, add more smoked paprika or use chipotle powder in place of the cayenne pepper.",
            "For a spicier sauce, add more cayenne pepper or use hot sauce instead of Worcestershire sauce.",
            "For a thinner sauce, add water or broth until the desired consistency is reached."
        ],
        "id": 62,
        "image": "62_BBQ_sauce.png"
    },
    {
        "name": "Hummus",
        "servings": 4,
        "cooking_time": "15 minutes",
        "ingredients": [
            {
                "name": "chickpeas",
                "quantity": "1 can (15 ounces)"
            },
            {
                "name": "lemon juice",
                "quantity": "2 tablespoons"
            },
            {
                "name": "tahini",
                "quantity": "2 tablespoons"
            },
            {
                "name": "garlic",
                "quantity": "2 cloves"
            },
            {
                "name": "extra-virgin olive oil",
                "quantity": "2 tablespoons"
            },
            {
                "name": "cumin",
                "quantity": "1 teaspoon"
            },
            {
                "name": "salt",
                "quantity": "1/2 teaspoon"
            },
            {
                "name": "water",
                "quantity": "2-3 tablespoons"
            }
        ],
        "instructions": [
            "Rinse and drain the chickpeas and place them in a food processor.",
            "Add the lemon juice, tahini, garlic, olive oil, cumin, and salt to the chickpeas.",
            "Process the mixture until smooth, scraping down the sides as needed.",
            "While the food processor is running, slowly add the water, 1 tablespoon at a time, until the hummus reaches the desired consistency.",
            "Taste and adjust the seasoning as needed.",
            "Serve the hummus with pita bread, crackers, or vegetables for dipping."
        ],
        "hints": [
            "For a smoother and creamier hummus, remove the skins of the chickpeas before processing.",
            "For a nuttier flavor, add roasted pine nuts or sesame seeds to the hummus.",
            "For a spicier hummus, add cayenne pepper or chili flakes.",
            "For a sweeter hummus, add a pinch of honey or maple syrup.",
            "For a tangier hummus, add more lemon juice."
        ],
        "id": 63,
        "image": "63_Hummus.png"
    },
    {
        "name": "Guacamole",
        "servings": 4,
        "cooking_time": "10 minutes",
        "ingredients": [
            {
                "name": "avocados",
                "quantity": "2 ripe"
            },
            {
                "name": "lime juice",
                "quantity": "1 lime"
            },
            {
                "name": "cilantro",
                "quantity": "1/4 cup, chopped"
            },
            {
                "name": "red onion",
                "quantity": "1/4 cup, diced"
            },
            {
                "name": "jalapeno pepper",
                "quantity": "1, seeded and minced"
            },
            {
                "name": "garlic",
                "quantity": "1 clove, minced"
            },
            {
                "name": "salt",
                "quantity": "1/2 teaspoon"
            }
        ],
        "instructions": [
            "Cut the avocados in half and remove the pit.",
            "Scoop the avocado flesh into a medium bowl.",
            "Mash the avocado with a fork or potato masher until it reaches your desired consistency.",
            "Add the lime juice, cilantro, red onion, jalapeno pepper, garlic, and salt to the avocado and mix well.",
            "Taste and adjust the seasoning as needed.",
            "Serve the guacamole immediately, or cover and refrigerate until ready to serve."
        ],
        "hints": [
            "For a creamier guacamole, add sour cream or plain yogurt to the mixture.",
            "For a chunky guacamole, leave some of the avocado in larger pieces.",
            "For a spicier guacamole, add more jalapeno pepper or use a hotter pepper.",
            "For a tangier guacamole, add more lime juice.",
            "To prevent browning, store the guacamole with plastic wrap directly on the surface and in an airtight container in the refrigerator."
        ],
        "id": 64,
        "image": "64_Guacamole.png"
    },
    {
        "name": "Salsa",
        "servings": 4,
        "cooking_time": "10 minutes",
        "ingredients": [
            {
                "name": "tomatoes",
                "quantity": "2 medium, chopped"
            },
            {
                "name": "red onion",
                "quantity": "1/4 cup, chopped"
            },
            {
                "name": "cilantro",
                "quantity": "1/4 cup, chopped"
            },
            {
                "name": "jalapeno pepper",
                "quantity": "1, seeded and minced"
            },
            {
                "name": "lime juice",
                "quantity": "1 lime"
            },
            {
                "name": "garlic",
                "quantity": "1 clove, minced"
            },
            {
                "name": "salt",
                "quantity": "1/2 teaspoon"
            }
        ],
        "instructions": [
            "Combine the tomatoes, red onion, cilantro, jalapeno pepper, lime juice, garlic, and salt in a medium bowl.",
            "Mix well to combine.",
            "Taste and adjust the seasoning as needed.",
            "Serve the salsa immediately, or cover and refrigerate until ready to serve."
        ],
        "hints": [
            "For a smoother salsa, blend all ingredients in a food processor or blender.",
            "For a spicier salsa, add more jalapeno pepper or use a hotter pepper.",
            "For a tangier salsa, add more lime juice.",
            "For a sweeter salsa, add a small amount of sugar or honey to the mixture.",
            "To prevent browning, store the salsa with plastic wrap directly on the surface and in an airtight container in the refrigerator."
        ],
        "id": 65,
        "image": "65_Salsa.png"
    },
    {
        "name": "Macaroni Salad",
        "servings": 6,
        "cooking_time": "30 minutes",
        "ingredients": [
            {
                "name": "elbow macaroni",
                "quantity": "1 lb"
            },
            {
                "name": "mayonnaise",
                "quantity": "1 cup"
            },
            {
                "name": "yellow mustard",
                "quantity": "2 tablespoons"
            },
            {
                "name": "apple cider vinegar",
                "quantity": "2 tablespoons"
            },
            {
                "name": "sugar",
                "quantity": "2 tablespoons"
            },
            {
                "name": "salt",
                "quantity": "1 teaspoon"
            },
            {
                "name": "black pepper",
                "quantity": "1/2 teaspoon"
            },
            {
                "name": "celery",
                "quantity": "1 cup, diced"
            },
            {
                "name": "red bell pepper",
                "quantity": "1 cup, diced"
            },
            {
                "name": "carrots",
                "quantity": "1 cup, grated"
            },
            {
                "name": "red onion",
                "quantity": "1/2 cup, diced"
            }
        ],
        "instructions": [
            "Cook the macaroni according to the package instructions until al dente.",
            "Drain and rinse the macaroni with cold water.",
            "In a large bowl, whisk together the mayonnaise, yellow mustard, apple cider vinegar, sugar, salt, and black pepper.",
            "Add the macaroni, celery, red bell pepper, carrots, and red onion to the bowl with the dressing.",
            "Stir to combine.",
            "Cover the bowl with plastic wrap and refrigerate for at least 2 hours, or overnight, to allow the flavors to meld."
        ],
        "hints": [
            "For a tangier macaroni salad, add more apple cider vinegar.",
            "For a sweeter macaroni salad, add more sugar.",
            "For a spicier macaroni salad, add a pinch of cayenne pepper.",
            "For a creamier macaroni salad, add more mayonnaise.",
            "To prevent browning, store the macaroni salad with plastic wrap directly on the surface and in an airtight container in the refrigerator."
        ],
        "id": 66,
        "image": "66_Macaroni_salad.png"
    },
    {
        "name": "Tzatziki Sauce",
        "servings": 6,
        "cooking_time": "15 minutes",
        "ingredients": [
            {
                "name": "plain Greek yogurt",
                "quantity": "2 cups"
            },
            {
                "name": "English cucumber",
                "quantity": "1, grated"
            },
            {
                "name": "garlic",
                "quantity": "2 cloves, minced"
            },
            {
                "name": "lemon juice",
                "quantity": "2 tablespoons"
            },
            {
                "name": "extra-virgin olive oil",
                "quantity": "2 tablespoons"
            },
            {
                "name": "dried dill",
                "quantity": "1 teaspoon"
            },
            {
                "name": "salt",
                "quantity": "1/2 teaspoon"
            },
            {
                "name": "black pepper",
                "quantity": "1/4 teaspoon"
            }
        ],
        "instructions": [
            "Peel the cucumber and grate it into a fine mesh strainer.",
            "Press the grated cucumber with a spatula to remove as much liquid as possible.",
            "In a medium bowl, mix together the Greek yogurt, grated cucumber, minced garlic, lemon juice, extra-virgin olive oil, dried dill, salt, and black pepper.",
            "Refrigerate the tzatziki sauce for at least 1 hour, or overnight, to allow the flavors to meld."
        ],
        "hints": [
            "For a tangier tzatziki sauce, add more lemon juice.",
            "For a milder tzatziki sauce, use less garlic.",
            "For a smoother tzatziki sauce, strain the yogurt overnight in the refrigerator.",
            "For a thicker tzatziki sauce, use a thicker yogurt, such as strained yogurt.",
            "Tzatziki sauce can be stored in an airtight container in the refrigerator for up to 1 week."
        ],
        "id": 67,
        "image": "67_Tzatziki_sauce.png"
    },
    {
        "name": "Ranch Dressing",
        "servings": 4,
        "cooking_time": "5 minutes",
        "ingredients": [
            {
                "name": "buttermilk",
                "quantity": "1 cup"
            },
            {
                "name": "mayonnaise",
                "quantity": "1/2 cup"
            },
            {
                "name": "fresh parsley",
                "quantity": "2 tablespoons, chopped"
            },
            {
                "name": "fresh dill",
                "quantity": "1 tablespoon, chopped"
            },
            {
                "name": "fresh chives",
                "quantity": "1 tablespoon, chopped"
            },
            {
                "name": "garlic powder",
                "quantity": "1/2 teaspoon"
            },
            {
                "name": "onion powder",
                "quantity": "1/2 teaspoon"
            },
            {
                "name": "salt",
                "quantity": "1/4 teaspoon"
            },
            {
                "name": "black pepper",
                "quantity": "1/4 teaspoon"
            }
        ],
        "instructions": [
            "In a medium bowl, whisk together the buttermilk, mayonnaise, parsley, dill, chives, garlic powder, onion powder, salt, and black pepper.",
            "Taste and adjust the seasonings as needed.",
            "Refrigerate the dressing for at least 30 minutes to allow the flavors to meld."
        ],
        "hints": [
            "For a tangier ranch dressing, use more buttermilk.",
            "For a creamier ranch dressing, use more mayonnaise.",
            "For a milder ranch dressing, use a milder buttermilk.",
            "For a thicker ranch dressing, use less buttermilk.",
            "Ranch dressing can be stored in an airtight container in the refrigerator for up to 1 week."
        ],
        "id": 68,
        "image": "68_Ranch_dressing.png"
    },
    {
        "name": "Vinaigrette",
        "servings": 4,
        "cooking_time": "5 minutes",
        "ingredients": [
            {
                "name": "red wine vinegar",
                "quantity": "2 tablespoons"
            },
            {
                "name": "Dijon mustard",
                "quantity": "1 teaspoon"
            },
            {
                "name": "honey",
                "quantity": "1 teaspoon"
            },
            {
                "name": "salt",
                "quantity": "1/4 teaspoon"
            },
            {
                "name": "black pepper",
                "quantity": "1/4 teaspoon"
            },
            {
                "name": "extra-virgin olive oil",
                "quantity": "6 tablespoons"
            }
        ],
        "instructions": [
            "In a small bowl, whisk together the red wine vinegar, Dijon mustard, honey, salt, and black pepper.",
            "While whisking continuously, slowly drizzle in the extra-virgin olive oil.",
            "Whisk until the vinaigrette is well combined and emulsified."
        ],
        "hints": [
            "For a tangier vinaigrette, use more vinegar.",
            "For a sweeter vinaigrette, use more honey.",
            "For a milder vinaigrette, use a milder mustard.",
            "For a thicker vinaigrette, use less oil.",
            "Vinaigrette can be stored in an airtight container in the refrigerator for up to 1 week."
        ],
        "id": 69,
        "image": "69_Vinaigrette.png"
    },
    {
        "name": "Caesar Dressing",
        "servings": 4,
        "cooking_time": "5 minutes",
        "ingredients": [
            {
                "name": "anchovy fillets",
                "quantity": "2, minced"
            },
            {
                "name": "garlic",
                "quantity": "2 cloves, minced"
            },
            {
                "name": "Dijon mustard",
                "quantity": "1 tablespoon"
            },
            {
                "name": "lemon juice",
                "quantity": "2 tablespoons"
            },
            {
                "name": "red wine vinegar",
                "quantity": "1 tablespoon"
            },
            {
                "name": "extra-virgin olive oil",
                "quantity": "1/2 cup"
            },
            {
                "name": "Parmesan cheese",
                "quantity": "1/2 cup, grated"
            },
            {
                "name": "salt",
                "quantity": "1/2 teaspoon"
            },
            {
                "name": "black pepper",
                "quantity": "1/4 teaspoon"
            }
        ],
        "instructions": [
            "In a medium bowl, whisk together the anchovies, garlic, mustard, lemon juice, and vinegar.",
            "Gradually add in the olive oil, whisking constantly, until the dressing is thick and emulsified.",
            "Stir in the Parmesan cheese.",
            "Season with salt and pepper to taste."
        ],
        "hints": [
            "For a milder Caesar dressing, use less anchovies.",
            "For a tangier Caesar dressing, use more lemon juice.",
            "For a creamier Caesar dressing, use more olive oil.",
            "For a thicker Caesar dressing, use less olive oil.",
            "Caesar dressing can be stored in an airtight container in the refrigerator for up to 1 week."
        ],
        "id": 70,
        "image": "70_Caesar_dressing.png"
    },
    {
        "name": "Thousand Island Dressing",
        "servings": 4,
        "cooking_time": "5 minutes",
        "ingredients": [
            {
                "name": "mayonnaise",
                "quantity": "1/2 cup"
            },
            {
                "name": "sweet pickle relish",
                "quantity": "2 tablespoons"
            },
            {
                "name": "ketchup",
                "quantity": "2 tablespoons"
            },
            {
                "name": "red wine vinegar",
                "quantity": "1 tablespoon"
            },
            {
                "name": "Worcestershire sauce",
                "quantity": "1 teaspoon"
            },
            {
                "name": "black pepper",
                "quantity": "1/4 teaspoon"
            }
        ],
        "instructions": [
            "In a medium bowl, whisk together the mayonnaise, pickle relish, ketchup, vinegar, and Worcestershire sauce.",
            "Season with black pepper to taste."
        ],
        "hints": [
            "For a sweeter Thousand Island dressing, use more ketchup.",
            "For a tangier Thousand Island dressing, use more vinegar.",
            "For a thicker Thousand Island dressing, use less vinegar.",
            "Thousand Island dressing can be stored in an airtight container in the refrigerator for up to 1 week."
        ],
        "id": 71,
        "image": "71_Thousand_island_dressing.png"
    },
    {
        "name": "Stuffed Bell Peppers",
        "servings": 4,
        "cooking_time": "50 minutes",
        "ingredients": [
            {
                "name": "bell peppers",
                "quantity": "4 large"
            },
            {
                "name": "ground beef",
                "quantity": "1 pound"
            },
            {
                "name": "onion",
                "quantity": "1/2 cup diced"
            },
            {
                "name": "garlic",
                "quantity": "2 cloves minced"
            },
            {
                "name": "tomato sauce",
                "quantity": "1 cup"
            },
            {
                "name": "long-grain white rice",
                "quantity": "1 cup cooked"
            },
            {
                "name": "shredded cheddar cheese",
                "quantity": "1 cup"
            },
            {
                "name": "salt",
                "quantity": "1/2 teaspoon"
            },
            {
                "name": "black pepper",
                "quantity": "1/4 teaspoon"
            }
        ],
        "instructions": [
            "Preheat oven to 375°F.",
            "Cut the tops off of the bell peppers and remove the seeds and membranes.",
            "In a large skillet, cook the ground beef, onion, and garlic over medium heat until browned.",
            "Stir in the tomato sauce, rice, salt, and pepper.",
            "Fill the peppers with the beef mixture and place them in a 9x13 inch baking dish.",
            "Cover the dish with aluminum foil and bake for 30 minutes.",
            "Remove the foil and sprinkle the cheese over the peppers.",
            "Bake for an additional 10 minutes, or until the cheese is melted and bubbly."
        ],
        "hints": [
            "For extra flavor, add diced carrots or chopped zucchini to the beef mixture.",
            "For a healthier version, use ground turkey instead of ground beef.",
            "To make the stuffing even more flavorful, use seasoned tomato sauce or add spices like basil or oregano.",
            "Leftover stuffed bell peppers can be stored in the refrigerator for up to 3 days."
        ],
        "id": 72,
        "image": "72_Stuffed_bell_peppers.png"
    },
    {
        "name": "Chicken and Dumplings",
        "servings": 6,
        "cooking_time": "1 hour and 30 minutes",
        "ingredients": [
            {
                "name": "chicken breasts",
                "quantity": "4 boneless and skinless"
            },
            {
                "name": "onion",
                "quantity": "1 large diced"
            },
            {
                "name": "celery",
                "quantity": "2 stalks diced"
            },
            {
                "name": "carrots",
                "quantity": "2 large diced"
            },
            {
                "name": "all-purpose flour",
                "quantity": "1/4 cup"
            },
            {
                "name": "chicken broth",
                "quantity": "6 cups"
            },
            {
                "name": "milk",
                "quantity": "2 cups"
            },
            {
                "name": "salt",
                "quantity": "1 teaspoon"
            },
            {
                "name": "black pepper",
                "quantity": "1/2 teaspoon"
            },
            {
                "name": "dumpling dough",
                "quantity": "2 cups"
            }
        ],
        "instructions": [
            "In a large pot, place the chicken breasts and add enough water to cover.",
            "Bring to a boil over high heat and then reduce heat to medium-low.",
            "Simmer for 25-30 minutes or until the chicken is cooked through.",
            "Remove the chicken from the pot and set aside to cool.",
            "In the same pot, add the onion, celery, and carrots and cook until the vegetables are softened.",
            "Stir in the flour until combined.",
            "Gradually add the chicken broth and milk, stirring constantly.",
            "Season with salt and pepper.",
            "Bring the mixture to a boil and then reduce heat to low.",
            "Shred the chicken and add it back to the pot.",
            "Drop spoonfuls of the dumpling dough into the pot.",
            "Cover and simmer for 15-20 minutes or until the dumplings are cooked through.",
            "Serve hot."
        ],
        "hints": [
            "For a thicker soup, use a roux made of equal parts butter and flour instead of just flour.",
            "Add sliced mushrooms or frozen peas for extra veggies.",
            "Use homemade or store-bought dumpling dough for convenience.",
            "Leftovers can be stored in the refrigerator for up to 3 days."
        ],
        "id": 73,
        "image": "73_Chicken_and_dumplings.png"
    },
    {
        "name": "Chicken and Vegetable Curry",
        "ingredients": [
            {
                "name": "chicken breast",
                "amount": "2 lbs"
            },
            {
                "name": "onion",
                "amount": "1 large"
            },
            {
                "name": "garlic cloves",
                "amount": "4"
            },
            {
                "name": "ginger",
                "amount": "1 inch"
            },
            {
                "name": "tomatoes",
                "amount": "2 medium"
            },
            {
                "name": "curry powder",
                "amount": "2 tbsp"
            },
            {
                "name": "coriander powder",
                "amount": "1 tsp"
            },
            {
                "name": "turmeric powder",
                "amount": "1 tsp"
            },
            {
                "name": "cumin powder",
                "amount": "1 tsp"
            },
            {
                "name": "red chili powder",
                "amount": "1 tsp"
            },
            {
                "name": "vegetables (e.g. carrots, potatoes, bell peppers)",
                "amount": "2 cups"
            },
            {
                "name": "vegetable oil",
                "amount": "2 tbsp"
            },
            {
                "name": "salt",
                "amount": "to taste"
            },
            {
                "name": "water",
                "amount": "1 cup"
            },
            {
                "name": "cilantro leaves",
                "amount": "for garnish"
            }
        ],
        "instructions": [
            "Cut the chicken into bite-sized pieces and set aside.",
            "Peel and chop the onion and garlic.",
            "Peel and grate the ginger.",
            "Blend the tomatoes in a food processor until smooth.",
            "Heat the oil in a large pan or wok over medium heat.",
            "Add the onions and cook until softened, about 5 minutes.",
            "Add the garlic and ginger and cook for 2 minutes.",
            "Add the blended tomatoes, curry powder, coriander powder, turmeric powder, cumin powder, and red chili powder.",
            "Stir and cook until the mixture begins to boil.",
            "Add the chicken and cook until it is browned on all sides.",
            "Add the vegetables and salt and stir.",
            "Pour in the water, bring to a boil, then reduce heat to low.",
            "Cover and simmer for 15-20 minutes, or until the chicken and vegetables are cooked through.",
            "Garnish with cilantro leaves and serve hot with rice or bread."
        ],
        "hints": [
            "Feel free to adjust the amount of spices to your preference.",
            "You can also use chicken thighs for a more flavorful curry.",
            "Add more or less water depending on the desired consistency of the sauce.",
            "For a creamier curry, you can add coconut milk instead of water.",
            "Experiment with different vegetables to find your favorite combination."
        ],
        "id": 74,
        "image": "74_Chicken_and_vegetable_curry.png"
    },
    {
        "name": "Chicken Tikka Masala",
        "ingredients": [
            {
                "name": "chicken breast",
                "quantity": "500g"
            },
            {
                "name": "yogurt",
                "quantity": "1 cup"
            },
            {
                "name": "ginger paste",
                "quantity": "1 tbsp"
            },
            {
                "name": "garlic paste",
                "quantity": "1 tbsp"
            },
            {
                "name": "turmeric powder",
                "quantity": "1 tsp"
            },
            {
                "name": "coriander powder",
                "quantity": "1 tbsp"
            },
            {
                "name": "cumin powder",
                "quantity": "1 tsp"
            },
            {
                "name": "red chili powder",
                "quantity": "1 tsp"
            },
            {
                "name": "garam masala",
                "quantity": "1 tsp"
            },
            {
                "name": "salt",
                "quantity": "1 tsp"
            },
            {
                "name": "lemon juice",
                "quantity": "2 tbsp"
            },
            {
                "name": "oil",
                "quantity": "2 tbsp"
            },
            {
                "name": "onion",
                "quantity": "2 (chopped)"
            },
            {
                "name": "tomato puree",
                "quantity": "1 cup"
            },
            {
                "name": "cream",
                "quantity": "1/2 cup"
            },
            {
                "name": "coriander leaves",
                "quantity": "1/4 cup (chopped)"
            }
        ],
        "instructions": [
            "Cut chicken breast into small pieces.",
            "In a bowl, mix together yogurt, ginger paste, garlic paste, turmeric powder, coriander powder, cumin powder, red chili powder, garam masala, salt, and lemon juice.",
            "Add chicken pieces to the bowl and mix well until chicken is fully coated.",
            "Cover the bowl with plastic wrap and refrigerate for at least 2 hours, or overnight for best results.",
            "Heat oil in a large pan over medium heat.",
            "Add chopped onions and sauté until they are soft and golden brown.",
            "Add tomato puree to the pan and cook for 2-3 minutes.",
            "Add the marinated chicken pieces to the pan and cook until the chicken is fully cooked and the sauce has thickened.",
            "Stir in cream and cook for an additional 2-3 minutes.",
            "Garnish with chopped coriander leaves and serve hot with rice or naan."
        ],
        "hints": [
            "For a spicier dish, increase the amount of red chili powder.",
            "For a creamier sauce, add more cream.",
            "Marinating the chicken for as long as possible for the best flavor.",
            "If the sauce is too thick, add a little water to thin it out."
        ],
        "id": 75,
        "image": "75_Chicken_tikka_masala.png"
    },
    {
        "name": "Chicken and Rice Casserole",
        "ingredients": [
            {
                "name": "chicken breasts",
                "quantity": "4 (skinless, boneless)"
            },
            {
                "name": "butter",
                "quantity": "1 tbsp"
            },
            {
                "name": "onion",
                "quantity": "1 (chopped)"
            },
            {
                "name": "garlic",
                "quantity": "2 cloves (minced)"
            },
            {
                "name": "long-grain white rice",
                "quantity": "1 1/2 cups"
            },
            {
                "name": "chicken broth",
                "quantity": "2 1/2 cups"
            },
            {
                "name": "canned diced tomatoes",
                "quantity": "1 can (14 oz)"
            },
            {
                "name": "dried thyme",
                "quantity": "1 tsp"
            },
            {
                "name": "dried basil",
                "quantity": "1 tsp"
            },
            {
                "name": "dried oregano",
                "quantity": "1 tsp"
            },
            {
                "name": "salt",
                "quantity": "1 tsp"
            },
            {
                "name": "black pepper",
                "quantity": "1/2 tsp"
            },
            {
                "name": "shredded cheddar cheese",
                "quantity": "1 cup"
            }
        ],
        "instructions": [
            "Preheat oven to 375°F.",
            "In a large saucepan, melt butter over medium heat.",
            "Add onion and garlic to the pan and sauté until softened, about 5 minutes.",
            "Stir in rice until well coated.",
            "Add chicken broth, diced tomatoes, thyme, basil, oregano, salt, and pepper.",
            "Bring the mixture to a boil, then reduce heat and let it simmer for 18-20 minutes or until the rice is tender.",
            "Arrange chicken breasts in a 9x13 inch baking dish.",
            "Pour the rice mixture over the chicken.",
            "Sprinkle shredded cheese on top.",
            "Bake in the preheated oven for 25-30 minutes, or until the cheese is melted and the chicken is fully cooked."
        ],
        "hints": [
            "Use rotisserie chicken for a shortcut.",
            "For a crunchy top, broil for the last 2-3 minutes of baking.",
            "For a healthier version, use brown rice and reduced-fat cheese.",
            "Add in your favorite veggies for a complete meal, such as broccoli, carrots, or bell peppers.",
            "Leftovers can be stored in an airtight container in the fridge for up to 4 days."
        ],
        "id": 76,
        "image": "76_Chicken_and_rice_casserole.png"
    },
    {
        "name": "Chicken and Mushroom Stroganoff",
        "ingredients": [
            {
                "name": "chicken breasts",
                "quantity": "4 (skinless, boneless)"
            },
            {
                "name": "salt",
                "quantity": "1 tsp"
            },
            {
                "name": "black pepper",
                "quantity": "1/2 tsp"
            },
            {
                "name": "all-purpose flour",
                "quantity": "1/4 cup"
            },
            {
                "name": "butter",
                "quantity": "2 tbsp"
            },
            {
                "name": "onion",
                "quantity": "1 (chopped)"
            },
            {
                "name": "garlic",
                "quantity": "2 cloves (minced)"
            },
            {
                "name": "cremini mushrooms",
                "quantity": "8 oz (sliced)"
            },
            {
                "name": "sour cream",
                "quantity": "1 cup"
            },
            {
                "name": "chicken broth",
                "quantity": "1 cup"
            },
            {
                "name": "dijon mustard",
                "quantity": "1 tbsp"
            },
            {
                "name": "wide egg noodles",
                "quantity": "1 lb"
            },
            {
                "name": "parsley",
                "quantity": "1/4 cup (chopped, for garnish)"
            }
        ],
        "instructions": [
            "Season chicken breasts with salt and pepper, then coat in flour.",
            "In a large skillet, melt butter over medium heat.",
            "Add chicken to the skillet and cook until browned, about 5-7 minutes per side.",
            "Remove chicken from the skillet and set aside.",
            "Add onion, garlic, and mushrooms to the skillet and cook until softened, about 5 minutes.",
            "Stir in sour cream, chicken broth, and dijon mustard.",
            "Return chicken to the skillet and let the sauce simmer until thickened, about 5-7 minutes.",
            "Meanwhile, cook egg noodles according to package instructions.",
            "Serve the stroganoff over the cooked noodles, garnished with parsley."
        ],
        "hints": [
            "Use leftover cooked chicken or rotisserie chicken for a shortcut.",
            "Substitute Greek yogurt for sour cream for a healthier version.",
            "Add a splash of white wine to the sauce for extra depth of flavor.",
            "Serve with crusty bread for soaking up the sauce.",
            "Leftovers can be stored in an airtight container in the fridge for up to 4 days."
        ],
        "id": 77,
        "image": "77_Chicken_and_mushroom_stroganoff.png"
    },
    {
        "name": "Chicken and Broccoli Alfredo",
        "ingredients": [
            {
                "name": "chicken breasts",
                "quantity": "4 (skinless, boneless)"
            },
            {
                "name": "salt",
                "quantity": "1 tsp"
            },
            {
                "name": "black pepper",
                "quantity": "1/2 tsp"
            },
            {
                "name": "olive oil",
                "quantity": "2 tbsp"
            },
            {
                "name": "broccoli florets",
                "quantity": "4 cups"
            },
            {
                "name": "garlic",
                "quantity": "2 cloves (minced)"
            },
            {
                "name": "heavy cream",
                "quantity": "1 1/2 cups"
            },
            {
                "name": "grated Parmesan cheese",
                "quantity": "1 cup"
            },
            {
                "name": "fettuccine pasta",
                "quantity": "1 lb"
            },
            {
                "name": "parsley",
                "quantity": "1/4 cup (chopped, for garnish)"
            }
        ],
        "instructions": [
            "Season chicken breasts with salt and pepper.",
            "In a large skillet, heat olive oil over medium heat.",
            "Add chicken to the skillet and cook until browned, about 5-7 minutes per side.",
            "Remove chicken from the skillet and set aside.",
            "Add broccoli, garlic, and a pinch of salt to the skillet and cook until tender, about 5-7 minutes.",
            "Stir in heavy cream and grated Parmesan cheese.",
            "Return chicken to the skillet and let the sauce simmer until thickened, about 5-7 minutes.",
            "Meanwhile, cook fettuccine pasta according to package instructions.",
            "Serve the alfredo over the cooked pasta, garnished with parsley."
        ],
        "hints": [
            "Use leftover cooked chicken or rotisserie chicken for a shortcut.",
            "Try adding other vegetables like mushrooms or bell peppers for added texture and flavor.",
            "For a healthier version, substitute half-and-half or milk for the heavy cream.",
            "Add a pinch of red pepper flakes for a spicy kick.",
            "Leftovers can be stored in an airtight container in the fridge for up to 4 days."
        ],
        "id": 78,
        "image": "78_Chicken_and_broccoli_alfredo.png"
    },
    {
        "name": "Chicken and Black Bean Enchiladas",
        "ingredients": [
            {
                "name": "chicken breasts",
                "quantity": "2 (skinless, boneless)"
            },
            {
                "name": "salt",
                "quantity": "1 tsp"
            },
            {
                "name": "black pepper",
                "quantity": "1/2 tsp"
            },
            {
                "name": "olive oil",
                "quantity": "2 tbsp"
            },
            {
                "name": "onion",
                "quantity": "1 (diced)"
            },
            {
                "name": "garlic",
                "quantity": "2 cloves (minced)"
            },
            {
                "name": "black beans",
                "quantity": "15 oz can (drained and rinsed)"
            },
            {
                "name": "corn kernels",
                "quantity": "1 cup (frozen or canned)"
            },
            {
                "name": "enchilada sauce",
                "quantity": "2 cups"
            },
            {
                "name": "flour tortillas",
                "quantity": "8"
            },
            {
                "name": "shredded cheddar cheese",
                "quantity": "2 cups"
            },
            {
                "name": "sour cream",
                "quantity": "1/2 cup (for serving)"
            },
            {
                "name": "cilantro",
                "quantity": "1/4 cup (chopped, for garnish)"
            }
        ],
        "instructions": [
            "Preheat oven to 375°F.",
            "Season chicken breasts with salt and pepper.",
            "In a large skillet, heat olive oil over medium heat.",
            "Add chicken to the skillet and cook until browned, about 5-7 minutes per side.",
            "Remove chicken from the skillet and set aside.",
            "In the same skillet, add onion and garlic and cook until softened, about 3-5 minutes.",
            "Shred the cooked chicken and add it back to the skillet along with black beans, corn, and enchilada sauce.",
            "Spread a spoonful of the chicken and black bean mixture in the center of each tortilla.",
            "Roll up the tortillas and place them seam-side down in a 9x13 inch baking dish.",
            "Pour the remaining enchilada sauce over the tortillas and sprinkle with shredded cheddar cheese.",
            "Bake for 25-30 minutes or until cheese is melted and bubbly.",
            "Serve with sour cream and garnished with cilantro."
        ],
        "hints": [
            "Use leftover cooked chicken or rotisserie chicken for a shortcut.",
            "For a spicy version, add diced jalapeños or chipotle peppers to the filling.",
            "Try adding other vegetables like bell peppers or zucchini for added texture and flavor.",
            "For a vegetarian version, substitute the chicken with extra black beans or roasted vegetables.",
            "Leftovers can be stored in an airtight container in the fridge"
        ],
        "id": 79,
        "image": "79_Chicken_and_black_bean_enchiladas.png"
    },
    {
        "name": "Chicken and Vegetable Stir-Fry",
        "ingredients": [
            {
                "name": "chicken breast",
                "quantity": "1 pound (sliced into thin strips)"
            },
            {
                "name": "salt",
                "quantity": "1 tsp"
            },
            {
                "name": "black pepper",
                "quantity": "1/2 tsp"
            },
            {
                "name": "cornstarch",
                "quantity": "1 tbsp"
            },
            {
                "name": "oil",
                "quantity": "2 tbsp"
            },
            {
                "name": "garlic",
                "quantity": "3 cloves (minced)"
            },
            {
                "name": "ginger",
                "quantity": "1 inch (grated)"
            },
            {
                "name": "vegetables",
                "quantity": "4 cups (sliced, such as bell peppers, carrots, broccoli, etc.)"
            },
            {
                "name": "soy sauce",
                "quantity": "1/4 cup"
            },
            {
                "name": "hoisin sauce",
                "quantity": "2 tbsp"
            },
            {
                "name": "rice vinegar",
                "quantity": "1 tbsp"
            },
            {
                "name": "sesame oil",
                "quantity": "1 tsp"
            },
            {
                "name": "scallions",
                "quantity": "2 (sliced, for garnish)"
            }
        ],
        "instructions": [
            "In a large bowl, season chicken strips with salt, pepper, and cornstarch.",
            "In a large wok or skillet, heat oil over high heat.",
            "Add chicken to the wok and cook until browned and cooked through, about 4-5 minutes.",
            "Remove chicken from the wok and set aside.",
            "In the same wok, add garlic and ginger and cook for 30 seconds.",
            "Add vegetables to the wok and stir-fry until just tender, about 3-4 minutes.",
            "Return chicken to the wok and add soy sauce, hoisin sauce, rice vinegar, and sesame oil.",
            "Stir to combine and cook for another 2-3 minutes until sauce is thick and glossy.",
            "Serve stir-fry over steamed rice and garnished with scallions."
        ],
        "hints": [
            "For a shortcut, use pre-sliced stir-fry vegetables.",
            "Try using different protein sources such as shrimp, beef, or tofu.",
            "Experiment with different sauces like oyster sauce or sweet chili sauce.",
            "For a healthier option, use brown rice instead of white rice.",
            "Leftovers can be stored in an airtight container in the fridge for up to 3 days."
        ],
        "id": 80,
        "image": "80_Chicken_and_vegetable_stir-fry.png"
    },
    {
        "name": "Chicken and Vegetable Pot Pie",
        "ingredients": [
            {
                "name": "pie crusts",
                "quantity": "2 (9 inch) store-bought or homemade"
            },
            {
                "name": "butter",
                "quantity": "4 tbsp"
            },
            {
                "name": "onion",
                "quantity": "1 (diced)"
            },
            {
                "name": "carrots",
                "quantity": "2 (peeled and diced)"
            },
            {
                "name": "celery",
                "quantity": "2 stalks (diced)"
            },
            {
                "name": "garlic",
                "quantity": "3 cloves (minced)"
            },
            {
                "name": "all-purpose flour",
                "quantity": "1/4 cup"
            },
            {
                "name": "chicken broth",
                "quantity": "2 cups"
            },
            {
                "name": "milk",
                "quantity": "1 cup"
            },
            {
                "name": "chicken breast",
                "quantity": "2 (cooked and shredded)"
            },
            {
                "name": "frozen mixed vegetables",
                "quantity": "2 cups"
            },
            {
                "name": "dried thyme",
                "quantity": "1 tsp"
            },
            {
                "name": "salt",
                "quantity": "1 tsp"
            },
            {
                "name": "black pepper",
                "quantity": "1/2 tsp"
            },
            {
                "name": "egg wash",
                "quantity": "1 large egg (beaten with 1 tbsp water)"
            }
        ],
        "instructions": [
            "Preheat oven to 400°F (200°C).",
            "In a large saucepan, melt butter over medium heat.",
            "Add onion, carrots, celery, and garlic to the saucepan and cook until softened, about 5 minutes.",
            "Stir in flour until well combined.",
            "Gradually add chicken broth and milk, whisking constantly, until mixture thickens.",
            "Stir in chicken, mixed vegetables, thyme, salt, and pepper.",
            "Remove saucepan from heat and let cool slightly.",
            "Roll out one pie crust to fit a 9-inch pie dish.",
            "Place bottom crust in pie dish.",
            "Pour chicken mixture over the crust.",
            "Roll out second pie crust to fit the top of the pie dish.",
            "Place top crust over the filling and crimp edges to seal.",
            "Brush top crust with egg wash.",
            "Bake pot pie for 35-40 minutes, or until crust is golden brown and filling is hot and bubbly.",
            "Let cool for 10 minutes before serving."
        ],
        "hints": [
            "For a flakier crust, use a combination of butter and shortening in the dough.",
            "Try adding other vegetables such as potatoes, green beans, or corn."
        ],
        "id": 81,
        "image": "81_Chicken_and_vegetable_pot_pie.png"
    },
    {
        "name": "Chicken and Vegetable Soup",
        "serving_size": 4,
        "cook_time": "45 minutes",
        "ingredients": [
            {
                "name": "chicken breast",
                "amount": "2 lbs"
            },
            {
                "name": "olive oil",
                "amount": "1 tbsp"
            },
            {
                "name": "onion",
                "amount": "1, chopped"
            },
            {
                "name": "garlic",
                "amount": "3 cloves, minced"
            },
            {
                "name": "carrots",
                "amount": "2, chopped"
            },
            {
                "name": "celery",
                "amount": "2 stalks, chopped"
            },
            {
                "name": "potatoes",
                "amount": "2, chopped"
            },
            {
                "name": "chicken broth",
                "amount": "8 cups"
            },
            {
                "name": "dried thyme",
                "amount": "1 tsp"
            },
            {
                "name": "salt",
                "amount": "1 tsp"
            },
            {
                "name": "pepper",
                "amount": "1 tsp"
            }
        ],
        "instructions": [
            "In a large pot, heat the olive oil over medium heat.",
            "Add the onion, garlic, carrots, celery, and potatoes and cook until the vegetables are soft, about 10 minutes.",
            "Add the chicken breast and cook until browned on both sides, about 5 minutes.",
            "Pour in the chicken broth and add the thyme, salt, and pepper.",
            "Bring the mixture to a boil, then reduce the heat and let it simmer for 30 minutes.",
            "Remove the chicken breast from the pot and shred it with a fork.",
            "Return the shredded chicken to the pot and let it cook for an additional 5 minutes.",
            "Serve hot and enjoy!"
        ],
        "hints": [
            "Use low-sodium chicken broth for a healthier option.",
            "Add other vegetables of your choice, such as corn or green beans.",
            "Try using rotisserie chicken for a shortcut in preparation time.",
            "Add a squeeze of lemon juice before serving for added flavor."
        ],
        "id": 82,
        "image": "82_Chicken_and_vegetable_soup.png"
    },
    {
        "name": "Chicken and Vegetable Quesadillas",
        "serving_size": 4,
        "cook_time": "20 minutes",
        "ingredients": [
            {
                "name": "chicken breast",
                "amount": "2 lbs"
            },
            {
                "name": "olive oil",
                "amount": "2 tbsp"
            },
            {
                "name": "onion",
                "amount": "1, chopped"
            },
            {
                "name": "bell pepper",
                "amount": "1, chopped"
            },
            {
                "name": "corn kernels",
                "amount": "1 cup"
            },
            {
                "name": "flour tortillas",
                "amount": "8"
            },
            {
                "name": "cheddar cheese",
                "amount": "2 cups, shredded"
            },
            {
                "name": "salt",
                "amount": "1 tsp"
            },
            {
                "name": "pepper",
                "amount": "1 tsp"
            }
        ],
        "instructions": [
            "In a large pan, heat the olive oil over medium heat.",
            "Add the chicken breast and cook until browned on both sides, about 5 minutes.",
            "Remove the chicken from the pan and shred it with a fork.",
            "In the same pan, add the onion, bell pepper, and corn and cook until the vegetables are soft, about 5 minutes.",
            "To assemble the quesadillas, place a tortilla on a flat surface and sprinkle a layer of shredded cheese on one half of the tortilla.",
            "Add a layer of the cooked chicken and vegetables on top of the cheese.",
            "Fold the other half of the tortilla over the filling to create a half-moon shape.",
            "Repeat the process for the remaining tortillas and filling.",
            "In the same pan, cook each quesadilla over medium heat until the cheese is melted and the tortilla is golden brown, about 3 minutes on each side.",
            "Serve hot and enjoy!"
        ],
        "hints": [
            "Try using different cheese for a different flavor, such as Monterey Jack or pepper jack.",
            "Add spices such as chili powder or cumin for extra flavor.",
            "Serve with salsa, sour cream, or guacamole for dipping.",
            "For a crispy texture, spray the pan with cooking spray before cooking the quesadillas."
        ],
        "id": 83,
        "image": "83_Chicken_and_vegetable_quesadillas.png"
    },
    {
        "name": "Spicy Beef Tacos",
        "serving_size": 4,
        "cook_time": "20 minutes",
        "ingredients": [
            {
                "name": "ground beef",
                "amount": "1 lb"
            },
            {
                "name": "taco seasoning",
                "amount": "1 package"
            },
            {
                "name": "water",
                "amount": "1/2 cup"
            },
            {
                "name": "tortillas",
                "amount": "8"
            },
            {
                "name": "lettuce",
                "amount": "1 head, shredded"
            },
            {
                "name": "tomatoes",
                "amount": "2, diced"
            },
            {
                "name": "cheddar cheese",
                "amount": "1 cup, shredded"
            },
            {
                "name": "sour cream",
                "amount": "1 cup"
            },
            {
                "name": "hot sauce",
                "amount": "1/2 cup"
            }
        ],
        "instructions": [
            "In a large pan, brown the ground beef over medium heat until fully cooked, about 5 minutes.",
            "Drain any excess fat and add the taco seasoning and water to the pan.",
            "Stir to combine and let cook for 2-3 minutes until the mixture has thickened.",
            "Warm the tortillas in the microwave or on a griddle.",
            "To assemble the tacos, place a spoonful of the spicy beef mixture on a tortilla.",
            "Add a layer of shredded lettuce, diced tomatoes, and shredded cheese on top of the beef.",
            "Drizzle hot sauce and a dollop of sour cream over the top.",
            "Fold the tortilla in half to enclose the filling and serve immediately."
        ],
        "hints": [
            "Try adding diced onion, jalapenos, or avocado for extra flavor and texture.",
            "Use corn tortillas instead of flour for a gluten-free option.",
            "For a spicy kick, add extra hot sauce or diced jalapenos.",
            "Serve with Spanish rice or black beans for a complete meal."
        ],
        "id": 84,
        "image": "84_Spicy_beef_tacos.png"
    },
    {
        "name": "Crispy Fried Chicken",
        "prep_time": "10 minutes",
        "cook_time": "20 minutes",
        "total_time": "30 minutes",
        "servings": "4",
        "ingredients": [
            {
                "name": "chicken legs or thighs",
                "amount": "4-6"
            },
            {
                "name": "all-purpose flour",
                "amount": "1 cup"
            },
            {
                "name": "salt",
                "amount": "1 teaspoon"
            },
            {
                "name": "black pepper",
                "amount": "1/2 teaspoon"
            },
            {
                "name": "cayenne pepper",
                "amount": "1/4 teaspoon"
            },
            {
                "name": "garlic powder",
                "amount": "1/4 teaspoon"
            },
            {
                "name": "onion powder",
                "amount": "1/4 teaspoon"
            },
            {
                "name": "buttermilk",
                "amount": "1 cup"
            },
            {
                "name": "vegetable oil",
                "amount": "1/2 cup"
            }
        ],
        "instructions": [
            "Mix together the flour, salt, black pepper, cayenne pepper, garlic powder, and onion powder in a large bowl.",
            "In another bowl, whisk together the buttermilk.",
            "Dip the chicken into the buttermilk, then roll in the flour mixture to evenly coat.",
            "Heat the oil in a large skillet over medium-high heat.",
            "Fry the chicken for about 7-8 minutes on each side, or until golden brown and crispy.",
            "Remove from heat and let cool for a few minutes before serving."
        ],
        "hints": [
            "For extra crunch, double-dip the chicken in the buttermilk and flour mixture.",
            "Make sure the oil is hot enough before adding the chicken, or it won't get crispy.",
            "For added flavor, try adding herbs like rosemary or thyme to the flour mixture.",
            "Let the chicken rest for a few minutes after cooking to allow the juices to redistribute and prevent it from becoming dry."
        ],
        "id": 85,
        "image": "85_Crispy_fried_chicken.png"
    },
    {
        "name": "Lemon Herb Salmon",
        "prep_time": "5 minutes",
        "cook_time": "15 minutes",
        "total_time": "20 minutes",
        "servings": "4",
        "ingredients": [
            {
                "name": "salmon fillets",
                "amount": "4"
            },
            {
                "name": "lemon",
                "amount": "1"
            },
            {
                "name": "fresh parsley",
                "amount": "1/4 cup"
            },
            {
                "name": "fresh basil",
                "amount": "1/4 cup"
            },
            {
                "name": "fresh thyme",
                "amount": "1/4 cup"
            },
            {
                "name": "garlic",
                "amount": "2 cloves"
            },
            {
                "name": "olive oil",
                "amount": "2 tablespoons"
            },
            {
                "name": "salt",
                "amount": "1/2 teaspoon"
            },
            {
                "name": "black pepper",
                "amount": "1/4 teaspoon"
            }
        ],
        "instructions": [
            "Preheat oven to 400°F (200°C).",
            "Zest and juice the lemon.",
            "In a food processor, combine the lemon zest, lemon juice, parsley, basil, thyme, garlic, olive oil, salt, and pepper.",
            "Blend until smooth and well combined.",
            "Arrange the salmon fillets in a single layer in a baking dish.",
            "Spoon the lemon herb mixture over the salmon.",
            "Bake for 15 minutes, or until the salmon is cooked through and flakes easily with a fork.",
            "Serve hot, garnished with additional lemon wedges and herbs, if desired."
        ],
        "hints": [
            "For added flavor, try using a mix of different herbs, such as rosemary or dill.",
            "Use fresh herbs for the best flavor, but dried herbs can also be used in a pinch.",
            "To add some heat, try adding red pepper flakes to the lemon herb mixture.",
            "For a crunchy texture, try topping the salmon with breadcrumbs before baking."
        ],
        "id": 86,
        "image": "86_Lemon_herb_salmon.png"
    },
    {
        "name": "Grilled Chicken Salad",
        "servings": 4,
        "prep_time": "15 minutes",
        "cook_time": "10 minutes",
        "ingredients": [
            {
                "name": "Boneless, skinless chicken breasts",
                "amount": "4",
                "unit": "pieces"
            },
            {
                "name": "Olive oil",
                "amount": "2",
                "unit": "tablespoons"
            },
            {
                "name": "Salt",
                "amount": "1",
                "unit": "teaspoon"
            },
            {
                "name": "Pepper",
                "amount": "1",
                "unit": "teaspoon"
            },
            {
                "name": "Lettuce",
                "amount": "8",
                "unit": "cups"
            },
            {
                "name": "Tomatoes",
                "amount": "2",
                "unit": "large"
            },
            {
                "name": "Cucumber",
                "amount": "1",
                "unit": "large"
            },
            {
                "name": "Feta cheese",
                "amount": "1/2",
                "unit": "cup"
            },
            {
                "name": "Lemon juice",
                "amount": "2",
                "unit": "tablespoons"
            },
            {
                "name": "Red wine vinegar",
                "amount": "2",
                "unit": "tablespoons"
            }
        ],
        "instructions": [
            "Preheat grill to medium-high heat.",
            "Brush chicken breasts with olive oil and season with salt and pepper.",
            "Grill chicken for 5-7 minutes on each side or until fully cooked.",
            "While the chicken is cooking, chop the lettuce, tomatoes, and cucumber into bite-sized pieces.",
            "In a large bowl, mix together the chopped vegetables, feta cheese, lemon juice, and red wine vinegar.",
            "Once the chicken has finished cooking, let it rest for a few minutes and then chop it into bite-sized pieces.",
            "Add the chicken to the bowl with the vegetables and toss everything together.",
            "Divide the salad onto 4 plates and serve."
        ],
        "hints": [
            "For a healthier option, use whole grain bread.",
            "Add avocado to the salad for extra creaminess.",
            "Try different dressings, such as balsamic vinaigrette or ranch dressing.",
            "You can also add other grilled vegetables, such as bell peppers and red onion.",
            "For extra flavor, marinate the chicken in advance in your favorite marinade."
        ],
        "id": 87,
        "image": "87_Grilled_chicken_salad.png"
    },
    {
        "name": "BBQ Pork Sandwich",
        "debug": true,
        "ingredients": [
            {
                "name": "Pork Shoulder",
                "quantity": "3",
                "unit": "lbs"
            },
            {
                "name": "BBQ Sauce",
                "quantity": "1",
                "unit": "cup"
            },
            {
                "name": "Apple Cider Vinegar",
                "quantity": "1/2",
                "unit": "cup"
            },
            {
                "name": "Brown Sugar",
                "quantity": "1/2",
                "unit": "cup"
            },
            {
                "name": "Mustard",
                "quantity": "2",
                "unit": "tbsp"
            },
            {
                "name": "Worcestershire Sauce",
                "quantity": "1",
                "unit": "tbsp"
            },
            {
                "name": "Garlic Powder",
                "quantity": "1",
                "unit": "tsp"
            },
            {
                "name": "Onion Powder",
                "quantity": "1",
                "unit": "tsp"
            },
            {
                "name": "Salt",
                "quantity": "1",
                "unit": "tsp"
            },
            {
                "name": "Pepper",
                "quantity": "1",
                "unit": "tsp"
            },
            {
                "name": "Hamburger Buns",
                "quantity": "8",
                "unit": ""
            }
        ],
        "instructions": [],
        "hints": [
            "You can also slow cook the pork in a slow cooker on low heat for 6-8 hours.",
            "Try topping the sandwich with coleslaw or pickles for added crunch.",
            "For a crispier texture, you can also grill the pork before shredding it."
        ],
        "id": 88,
        "image": "88_Bbq_pork_sandwich.png"
    },
    {
        "name": "Shrimp Scampi Pasta",
        "debug": true,
        "ingredients": [
            {
                "name": "Pasta",
                "quantity": "1",
                "unit": "lb"
            },
            {
                "name": "Shrimp",
                "quantity": "1",
                "unit": "lb"
            },
            {
                "name": "Garlic",
                "quantity": "6",
                "unit": "cloves"
            },
            {
                "name": "Lemon",
                "quantity": "1",
                "unit": ""
            },
            {
                "name": "Butter",
                "quantity": "4",
                "unit": "tbsp"
            },
            {
                "name": "White Wine",
                "quantity": "1/2",
                "unit": "cup"
            },
            {
                "name": "Parsley",
                "quantity": "1/4",
                "unit": "cup"
            },
            {
                "name": "Salt",
                "quantity": "1",
                "unit": "tsp"
            },
            {
                "name": "Pepper",
                "quantity": "1",
                "unit": "tsp"
            }
        ],
        "instructions": [],
        "hints": [
            "Use large, peeled and deveined shrimp for easier preparation.",
            "You can also add red pepper flakes for a spicy kick.",
            "Try serving the pasta with crusty bread to soak up the delicious sauce."
        ],
        "id": 89,
        "image": "89_Shrimp_scampi_pasta.png"
    },
    {
        "name": "Garlic Mushroom Steak",
        "debug": true,
        "ingredients": [
            {
                "name": "Steak",
                "quantity": "4",
                "unit": "pieces"
            },
            {
                "name": "Mushrooms",
                "quantity": "8",
                "unit": "oz"
            },
            {
                "name": "Garlic",
                "quantity": "4",
                "unit": "cloves"
            },
            {
                "name": "Olive Oil",
                "quantity": "2",
                "unit": "tbsp"
            },
            {
                "name": "Butter",
                "quantity": "2",
                "unit": "tbsp"
            },
            {
                "name": "Thyme",
                "quantity": "1",
                "unit": "tsp"
            },
            {
                "name": "Salt",
                "quantity": "1",
                "unit": "tsp"
            },
            {
                "name": "Pepper",
                "quantity": "1",
                "unit": "tsp"
            }
        ],
        "instructions": [],
        "hints": [
            "Make sure to let the steaks rest after cooking to allow the juices to redistribute.",
            "You can add other seasonings to the mushroom mixture to taste, such as rosemary or parsley.",
            "Try serving the steaks with mashed potatoes or roasted vegetables for a complete meal."
        ],
        "id": 90,
        "image": "90_Garlic_mushroom_steak.png"
    },
    {
        "name": "Baked Lemon Chicken",
        "ingredients": [
            {
                "name": "skinless, boneless chicken breasts",
                "amount": "4",
                "unit": "pieces"
            },
            {
                "name": "salt",
                "amount": "1/2",
                "unit": "teaspoon"
            },
            {
                "name": "black pepper",
                "amount": "1/4",
                "unit": "teaspoon"
            },
            {
                "name": "lemon juice",
                "amount": "1/2",
                "unit": "cup"
            },
            {
                "name": "lemon zest",
                "amount": "2",
                "unit": "teaspoons"
            },
            {
                "name": "garlic",
                "amount": "3",
                "unit": "cloves"
            },
            {
                "name": "olive oil",
                "amount": "2",
                "unit": "tablespoons"
            },
            {
                "name": "fresh parsley",
                "amount": "2",
                "unit": "tablespoons"
            },
            {
                "name": "dried oregano",
                "amount": "1",
                "unit": "teaspoon"
            }
        ],
        "instructions": [
            {
                "step": "1",
                "instruction": "Preheat oven to 375°F (190°C). Line a baking dish with parchment paper."
            },
            {
                "step": "2",
                "instruction": "Season the chicken breasts with salt and pepper on both sides."
            },
            {
                "step": "3",
                "instruction": "In a bowl, mix together the lemon juice, lemon zest, garlic, olive oil, parsley, and oregano."
            },
            {
                "step": "4",
                "instruction": "Place the chicken breasts in the baking dish and pour the lemon mixture over the chicken."
            },
            {
                "step": "5",
                "instruction": "Bake for 25-30 minutes, or until the chicken is cooked through and the internal temperature reaches 165°F (74°C)."
            },
            {
                "step": "6",
                "instruction": "Remove the chicken from the oven and let rest for 5 minutes before serving."
            }
        ],
        "hints": [
            {
                "tip": "For an extra crispy skin, broil the chicken for 2-3 minutes before serving."
            },
            {
                "tip": "If you don't have fresh parsley, you can use dried parsley instead."
            },
            {
                "tip": "Serve the baked lemon chicken with steamed vegetables or a side salad for a complete meal."
            }
        ],
        "id": 91,
        "image": "91_Baked_lemon_chicken.png"
    },
    {
        "name": "Spicy Sausage Stew",
        "prep_time": "15 minutes",
        "cook_time": "45 minutes",
        "servings": "6",
        "ingredients": [
            {
                "name": "spicy sausage",
                "amount": "1 lb"
            },
            {
                "name": "olive oil",
                "amount": "2 tbsp"
            },
            {
                "name": "onion",
                "amount": "1 medium"
            },
            {
                "name": "garlic",
                "amount": "3 cloves"
            },
            {
                "name": "diced tomatoes",
                "amount": "1 can"
            },
            {
                "name": "chicken broth",
                "amount": "2 cups"
            },
            {
                "name": "red pepper flakes",
                "amount": "1 tsp"
            },
            {
                "name": "potatoes",
                "amount": "2 medium"
            },
            {
                "name": "carrots",
                "amount": "2 medium"
            },
            {
                "name": "green beans",
                "amount": "1 cup"
            },
            {
                "name": "chopped fresh parsley",
                "amount": "1/4 cup"
            }
        ],
        "instructions": [
            "In a large pot, heat the olive oil over medium heat.",
            "Add the sausage and cook until browned, about 8 minutes.",
            "Remove the sausage from the pot and set aside.",
            "In the same pot, add the onion and cook until softened, about 5 minutes.",
            "Add the garlic and cook until fragrant, about 1 minute.",
            "Add the diced tomatoes, chicken broth, red pepper flakes, and 1 tsp of salt.",
            "Bring the mixture to a boil, then reduce the heat to low and let it simmer for 10 minutes.",
            "Dice the potatoes and carrots and add them to the pot.",
            "Let the stew simmer for 15 minutes or until the vegetables are tender.",
            "Add the green beans and cook until heated through, about 5 minutes.",
            "Return the sausage to the pot and let the stew simmer for 5 more minutes.",
            "Stir in the chopped parsley and serve."
        ],
        "hints": [
            "For a thicker stew, mash some of the potatoes against the side of the pot to thicken the sauce.",
            "For a sweeter stew, add 1 tsp of brown sugar.",
            "Try serving the stew with crusty bread to soak up the delicious sauce.",
            "Add more or less red pepper flakes depending on your desired level of spiciness."
        ],
        "id": 92,
        "image": "92_Spicy_sausage_stew.png"
    },
    {
        "name": "Creamy Spinach Pasta",
        "ingredients": [
            {
                "name": "penne pasta",
                "amount": "8",
                "unit": "oz"
            },
            {
                "name": "olive oil",
                "amount": "2",
                "unit": "tablespoons"
            },
            {
                "name": "garlic",
                "amount": "3",
                "unit": "cloves"
            },
            {
                "name": "spinach",
                "amount": "6",
                "unit": "cups"
            },
            {
                "name": "heavy cream",
                "amount": "1",
                "unit": "cup"
            },
            {
                "name": "grated parmesan cheese",
                "amount": "1",
                "unit": "cup"
            },
            {
                "name": "salt",
                "amount": "1/2",
                "unit": "teaspoon"
            },
            {
                "name": "black pepper",
                "amount": "1/4",
                "unit": "teaspoon"
            }
        ],
        "instructions": [
            {
                "step": "1",
                "instruction": "Cook the penne pasta according to package instructions until al dente. Drain and set aside."
            },
            {
                "step": "2",
                "instruction": "In a large pan, heat the olive oil over medium heat. Add the garlic and cook until fragrant, about 1 minute."
            },
            {
                "step": "3",
                "instruction": "Add the spinach to the pan and cook until wilted, about 2-3 minutes. Remove from heat."
            },
            {
                "step": "4",
                "instruction": "In a medium saucepan, heat the heavy cream over low heat until hot. Stir in the grated parmesan cheese until melted and well combined."
            },
            {
                "step": "5",
                "instruction": "Add the cooked pasta to the pan with the spinach and pour in the creamy parmesan sauce. Stir to combine."
            },
            {
                "step": "6",
                "instruction": "Season with salt and black pepper to taste."
            },
            {
                "step": "7",
                "instruction": "Serve the creamy spinach pasta hot, garnished with extra grated parmesan cheese and black pepper, if desired."
            }
        ],
        "hints": [
            "To make the dish gluten-free, use gluten-free pasta.",
            "For a lighter version, use half-and-half or milk instead of heavy cream.",
            "For a nuttier flavor, use grated pecorino romano cheese instead of parmesan cheese.",
            "Add diced cooked chicken or shrimp for a protein boost."
        ],
        "id": 93,
        "image": "93_Creamy_spinach_pasta.png"
    },
    {
        "name": "Crispy Tofu Stir-fry",
        "prep_time": "10 minutes",
        "cook_time": "15 minutes",
        "servings": "4",
        "ingredients": [
            {
                "name": "extra-firm tofu",
                "amount": "14 oz"
            },
            {
                "name": "cornstarch",
                "amount": "1/2 cup"
            },
            {
                "name": "vegetable oil",
                "amount": "2 tbsp"
            },
            {
                "name": "soy sauce",
                "amount": "2 tbsp"
            },
            {
                "name": "sugar",
                "amount": "1 tsp"
            },
            {
                "name": "garlic",
                "amount": "2 cloves"
            },
            {
                "name": "ginger",
                "amount": "1 inch"
            },
            {
                "name": "vegetables (e.g. bell peppers, onion, broccoli, carrots)",
                "amount": "4 cups"
            },
            {
                "name": "sriracha sauce",
                "amount": "1 tbsp"
            },
            {
                "name": "rice",
                "amount": "4 cups"
            }
        ],
        "instructions": [
            "Press the tofu for at least 15 minutes to remove excess moisture.",
            "Cut the tofu into 1-inch cubes.",
            "In a bowl, mix the cornstarch and 1 tsp of salt.",
            "Coat the tofu cubes in the cornstarch mixture.",
            "Heat the vegetable oil in a large skillet over medium heat.",
            "Add the coated tofu and cook until golden brown, about 5 minutes.",
            "Remove the tofu from the pan and set aside.",
            "In a small bowl, mix together the soy sauce, sugar, sriracha sauce, and 1 tbsp of water.",
            "In the same pan, add the garlic and ginger and cook until fragrant, about 1 minute.",
            "Add the vegetables and cook until crisp-tender, about 5 minutes.",
            "Return the tofu to the pan and add the sauce.",
            "Stir until the tofu is coated and the sauce is heated through, about 2 minutes.",
            "Serve over a bed of rice."
        ],
        "hints": [
            "For a crispy texture, avoid over-stirring the tofu while it is cooking.",
            "For a gluten-free option, substitute the soy sauce with tamari.",
            "Try adding different spices, such as red pepper flakes or cumin, for added flavor.",
            "Add some crunch by topping the stir-fry with chopped peanuts or cashews."
        ],
        "id": 94,
        "image": "94_Crispy_tofu_stir-fry.png"
    },
    {
        "name": "Lemon Herb Risotto",
        "prep_time": "15 minutes",
        "cook_time": "25 minutes",
        "servings": "4",
        "ingredients": [
            {
                "name": "arborio rice",
                "amount": "1 1/2 cups"
            },
            {
                "name": "chicken broth",
                "amount": "4 cups"
            },
            {
                "name": "white wine",
                "amount": "1/2 cup"
            },
            {
                "name": "lemon juice",
                "amount": "1/2 cup"
            },
            {
                "name": "lemon zest",
                "amount": "2 tsp"
            },
            {
                "name": "parmesan cheese",
                "amount": "1/2 cup"
            },
            {
                "name": "fresh parsley",
                "amount": "1/4 cup"
            },
            {
                "name": "fresh basil",
                "amount": "1/4 cup"
            },
            {
                "name": "butter",
                "amount": "2 tbsp"
            },
            {
                "name": "olive oil",
                "amount": "2 tbsp"
            },
            {
                "name": "shallots",
                "amount": "2"
            },
            {
                "name": "garlic",
                "amount": "3 cloves"
            },
            {
                "name": "salt",
                "amount": "1 tsp"
            },
            {
                "name": "black pepper",
                "amount": "1/2 tsp"
            }
        ],
        "instructions": [
            "In a saucepan, heat the chicken broth until it simmers.",
            "Reduce heat to low and keep the broth warm.",
            "In a separate saucepan, heat the olive oil and butter over medium heat.",
            "Add the shallots and garlic and cook until softened, about 5 minutes.",
            "Add the arborio rice and stir to coat with the oil and butter.",
            "Add the white wine and stir until absorbed.",
            "Add the lemon juice, lemon zest, salt, and pepper.",
            "Begin adding the warm chicken broth, 1/2 cup at a time, stirring continuously until each addition is absorbed before adding the next.",
            "Repeat until all the broth has been added and the rice is creamy and tender.",
            "Stir in the parmesan cheese and herbs.",
            "Serve immediately, garnished with additional parmesan cheese and lemon wedges, if desired."
        ],
        "hints": [
            "Make sure to stir continuously to prevent the risotto from sticking to the bottom of the pan.",
            "For a creamier texture, add a splash of heavy cream at the end.",
            "Experiment with different herbs, such as thyme or rosemary, for a different flavor profile.",
            "Try topping the risotto with sautéed mushrooms or grilled shrimp for a heartier dish."
        ],
        "id": 95,
        "image": "95_Lemon_herb_risotto.png"
    },
    {
        "name": "Grilled Vegetable Skewers",
        "ingredients": [
            {
                "name": "mixed vegetables (such as bell peppers, onions, mushrooms, cherry tomatoes, and zucchini)",
                "amount": "6",
                "unit": "cups"
            },
            {
                "name": "olive oil",
                "amount": "1/4",
                "unit": "cup"
            },
            {
                "name": "balsamic vinegar",
                "amount": "2",
                "unit": "tablespoons"
            },
            {
                "name": "dried basil",
                "amount": "1",
                "unit": "teaspoon"
            },
            {
                "name": "dried oregano",
                "amount": "1",
                "unit": "teaspoon"
            },
            {
                "name": "garlic powder",
                "amount": "1",
                "unit": "teaspoon"
            },
            {
                "name": "salt",
                "amount": "1/4",
                "unit": "teaspoon"
            },
            {
                "name": "black pepper",
                "amount": "1/4",
                "unit": "teaspoon"
            }
        ],
        "instructions": [
            {
                "step": "1",
                "instruction": "Preheat grill to medium-high heat."
            },
            {
                "step": "2",
                "instruction": "In a large bowl, combine the mixed vegetables, olive oil, balsamic vinegar, basil, oregano, garlic powder, salt, and pepper. Toss until the vegetables are well coated."
            },
            {
                "step": "3",
                "instruction": "Thread the vegetables onto skewers, alternating between different types of vegetables. Reserve any leftover marinade."
            },
            {
                "step": "4",
                "instruction": "Grill the skewers, turning occasionally, for 15-20 minutes, until the vegetables are tender and lightly charred."
            },
            {
                "step": "5",
                "instruction": "Brush the skewers with the reserved marinade during the last 5 minutes of grilling."
            },
            {
                "step": "6",
                "instruction": "Serve hot off the grill."
            }
        ],
        "hints": [
            "Soak wooden skewers in water for at least 30 minutes before using to prevent them from burning on the grill.",
            "Cut the vegetables into similar-sized pieces so they cook evenly on the grill.",
            "If using cherry tomatoes, skewer them through the stem end to prevent them from falling off the skewers.",
            "Feel free to experiment with different combinations of vegetables and seasonings to find your favorite flavor combinations."
        ],
        "id": 96,
        "image": "96_Grilled_vegetable_skewers.png"
    },
    {
        "name": "BBQ Ribs Platter",
        "prep_time": "10 minutes",
        "cook_time": "3 hours",
        "servings": "4-6",
        "ingredients": [
            {
                "name": "pork spareribs",
                "amount": "2-3 lbs"
            },
            {
                "name": "salt",
                "amount": "2 tsp"
            },
            {
                "name": "black pepper",
                "amount": "2 tsp"
            },
            {
                "name": "brown sugar",
                "amount": "1/2 cup"
            },
            {
                "name": "chili powder",
                "amount": "2 tbsp"
            },
            {
                "name": "paprika",
                "amount": "2 tbsp"
            },
            {
                "name": "garlic powder",
                "amount": "2 tsp"
            },
            {
                "name": "onion powder",
                "amount": "2 tsp"
            },
            {
                "name": "your favorite BBQ sauce",
                "amount": "1 cup"
            }
        ],
        "instructions": [
            "Preheat oven to 300°F.",
            "Mix together salt, pepper, brown sugar, chili powder, paprika, garlic powder, and onion powder in a bowl.",
            "Rub the mixture over the spareribs, making sure they are well coated.",
            "Place the spareribs in a large baking dish.",
            "Bake for 2 1/2 hours, or until tender.",
            "Remove the ribs from the oven and brush with BBQ sauce.",
            "Return to the oven and bake for an additional 30 minutes, or until the sauce is caramelized and bubbly.",
            "Serve immediately with your favorite sides, such as coleslaw and baked beans."
        ],
        "hints": [
            "For extra flavor, marinate the spareribs in the spice mixture overnight in the refrigerator.",
            "Try using a different type of BBQ sauce for a different flavor profile.",
            "For a crispy texture, broil the ribs for a few minutes before serving.",
            "To ensure even cooking, flip the ribs over halfway through the baking time."
        ],
        "id": 97,
        "image": "97_Bbq_ribs_platter.png"
    },
    {
        "name": "Shrimp Paella Rice",
        "servings": 4,
        "cooking_time": "45 minutes",
        "ingredients": [
            {
                "name": "olive oil",
                "amount": "2 tablespoons"
            },
            {
                "name": "onion",
                "amount": "1 medium, chopped"
            },
            {
                "name": "garlic",
                "amount": "3 cloves, minced"
            },
            {
                "name": "tomatoes",
                "amount": "2 medium, chopped"
            },
            {
                "name": "paprika",
                "amount": "1 teaspoon"
            },
            {
                "name": "saffron threads",
                "amount": "a pinch"
            },
            {
                "name": "short-grain rice",
                "amount": "1 1/2 cups"
            },
            {
                "name": "chicken broth",
                "amount": "3 cups"
            },
            {
                "name": "green beans",
                "amount": "1 cup, trimmed"
            },
            {
                "name": "shrimp",
                "amount": "1 pound, peeled and deveined"
            },
            {
                "name": "lemon",
                "amount": "1, cut into wedges"
            },
            {
                "name": "parsley",
                "amount": "1/4 cup, chopped"
            }
        ],
        "instructions": [
            "In a large paella pan or a wide shallow skillet, heat the olive oil over medium heat.",
            "Add the onion and garlic and cook until softened, about 5 minutes.",
            "Stir in the chopped tomatoes and cook until they have broken down and released their juices, about 10 minutes.",
            "Sprinkle the paprika over the mixture and stir to combine.",
            "Stir in the saffron threads.",
            "Add the rice and cook, stirring, until it is well coated and translucent, about 5 minutes.",
            "Pour in the chicken broth and stir to combine.",
            "Add the green beans.",
            "Arrange the shrimp on top of the rice mixture.",
            "Reduce the heat to low, cover the pan and cook until the liquid is absorbed and the rice is tender, about 20 minutes.",
            "Squeeze lemon wedges over the paella and sprinkle with chopped parsley.",
            "Serve hot."
        ],
        "hints": [
            "Use a paella pan, if possible, for best results. If not, use a wide shallow skillet.",
            "Use short-grain rice for this dish, as it absorbs liquids well and becomes tender and creamy.",
            "Stir the rice mixture as little as possible after adding the broth, as stirring too much will make the rice gummy.",
            "Do not lift the lid while the paella is cooking, as this will release the steam and disrupt the cooking process."
        ],
        "id": 98,
        "image": "98_Shrimp_paella_rice.png"
    },
    {
        "name": "Garlic Mushroom Risotto",
        "servings": 4,
        "prep_time": "10 minutes",
        "cook_time": "25 minutes",
        "ingredients": [
            {
                "name": "arborio rice",
                "amount": "1 cup"
            },
            {
                "name": "olive oil",
                "amount": "3 tablespoons"
            },
            {
                "name": "butter",
                "amount": "2 tablespoons"
            },
            {
                "name": "garlic",
                "amount": "4 cloves"
            },
            {
                "name": "mushrooms",
                "amount": "8 oz."
            },
            {
                "name": "white wine",
                "amount": "1/2 cup"
            },
            {
                "name": "chicken or vegetable broth",
                "amount": "4 cups"
            },
            {
                "name": "grated parmesan cheese",
                "amount": "1/2 cup"
            },
            {
                "name": "salt and pepper",
                "amount": "to taste"
            }
        ],
        "instructions": [
            "In a large saucepan, heat the olive oil and butter over medium heat.",
            "Add the garlic and cook until fragrant, about 1 minute.",
            "Add the mushrooms and cook until they release their moisture and start to brown, about 5 minutes.",
            "Stir in the rice and cook for 2-3 minutes, until the grains are well coated with oil.",
            "Pour in the white wine and cook, stirring constantly, until the wine has been completely absorbed.",
            "Begin adding the broth, 1 cup at a time, stirring constantly and allowing each cup to be absorbed before adding the next.",
            "Continue cooking and stirring until the rice is tender and the mixture is creamy, about 20 minutes.",
            "Stir in the parmesan cheese and season with salt and pepper to taste.",
            "Serve hot, garnished with additional parmesan cheese and chopped parsley if desired."
        ],
        "hints": [
            "Use a high-quality broth for the best flavor.",
            "Don't skimp on the stirring! Risotto requires constant stirring to develop its creamy texture.",
            "Use freshly grated parmesan cheese for the best flavor.",
            "For an extra hit of flavor, try adding sautéed onions or shallots to the mixture with the garlic.",
            "For a vegetarian option, substitute the chicken broth for vegetable broth."
        ],
        "id": 99,
        "image": "99_Garlic_mushroom_risotto.png"
    },
    {
        "name": "Baked Parmesan Fish",
        "servings": 4,
        "prep_time": "10 minutes",
        "cook_time": "20 minutes",
        "ingredients": [
            {
                "name": "white fish fillets",
                "amount": "4 (6 oz. each)"
            },
            {
                "name": "mayonnaise",
                "amount": "1/2 cup"
            },
            {
                "name": "grated parmesan cheese",
                "amount": "1/2 cup"
            },
            {
                "name": "bread crumbs",
                "amount": "1/2 cup"
            },
            {
                "name": "lemon juice",
                "amount": "1 tablespoon"
            },
            {
                "name": "dried basil",
                "amount": "1 teaspoon"
            },
            {
                "name": "dried oregano",
                "amount": "1 teaspoon"
            },
            {
                "name": "garlic powder",
                "amount": "1 teaspoon"
            },
            {
                "name": "salt and pepper",
                "amount": "to taste"
            }
        ],
        "instructions": [
            "Preheat oven to 400°F.",
            "Line a baking sheet with parchment paper or lightly grease with cooking spray.",
            "In a small bowl, combine the mayonnaise, parmesan cheese, bread crumbs, lemon juice, basil, oregano, garlic powder, salt, and pepper.",
            "Place the fish fillets on the prepared baking sheet.",
            "Spread the mayonnaise mixture evenly over the top of each fillet.",
            "Bake for 15-20 minutes, or until the fish is cooked through and the topping is golden brown.",
            "Serve hot, garnished with additional lemon wedges and chopped parsley if desired."
        ],
        "hints": [
            "Use a white fish that has a firm texture, such as cod, haddock, or halibut.",
            "If you don't have bread crumbs, you can substitute with crushed crackers or crushed cereal.",
            "For extra crispiness, broil the fish for the last 2-3 minutes of cooking.",
            "Try adding different herbs and spices to the mayonnaise mixture to suit your taste preferences.",
            "For a gluten-free option, use gluten-free bread crumbs or almond flour."
        ],
        "id": 100,
        "image": "100_Baked_parmesan_fish.png"
    },
    {
        "name": "Spicy Beef Skewers",
        "servings": 4,
        "prep_time": "15 minutes",
        "cook_time": "15 minutes",
        "ingredients": [
            {
                "name": "beef sirloin steak",
                "amount": "1 lb.",
                "notes": "cut into 1-inch cubes"
            },
            {
                "name": "red bell pepper",
                "amount": "1",
                "notes": "cut into 1-inch squares"
            },
            {
                "name": "yellow onion",
                "amount": "1",
                "notes": "cut into 1-inch squares"
            },
            {
                "name": "spicy marinade",
                "amount": "1/2 cup",
                "notes": "store-bought or homemade"
            },
            {
                "name": "skewers",
                "amount": "8 (if using wooden skewers, soak in water for 30 minutes before using)"
            },
            {
                "name": "salt and pepper",
                "amount": "to taste"
            },
            {
                "name": "vegetable oil",
                "amount": "1 tablespoon"
            }
        ],
        "instructions": [
            "Preheat grill to medium-high heat.",
            "Thread the beef, bell pepper, and onion onto the skewers.",
            "Brush the skewers with the spicy marinade, making sure to coat evenly.",
            "Season with salt and pepper.",
            "Brush the grill grates with vegetable oil.",
            "Grill the skewers for 12-15 minutes, turning occasionally, or until the beef is cooked to your desired doneness.",
            "Serve hot, garnished with chopped cilantro and a squeeze of lime juice if desired."
        ],
        "hints": [
            "Choose a beef cut that is tender and flavorful, such as sirloin or tenderloin.",
            "If you don't have a grill, you can also cook the skewers in the oven at 400°F for 12-15 minutes.",
            "Try using different types of peppers or vegetables for a colorful and flavorful twist.",
            "For a less spicy option, use a mild marinade or omit the hot sauce from the marinade.",
            "For a gluten-free option, make sure to use a gluten-free marinade."
        ],
        "id": 101,
        "image": "101_Spicy_beef_skewers.png"
    },
    {
        "name": "Creamy Tomato Risotto",
        "prep_time": "10 minutes",
        "cook_time": "25 minutes",
        "servings": "4",
        "ingredients": [
            {
                "name": "arborio rice",
                "amount": "2 cups"
            },
            {
                "name": "olive oil",
                "amount": "2 tbsp"
            },
            {
                "name": "chopped onion",
                "amount": "1"
            },
            {
                "name": "minced garlic",
                "amount": "2 cloves"
            },
            {
                "name": "tomato puree",
                "amount": "28 oz"
            },
            {
                "name": "chicken or vegetable broth",
                "amount": "5 cups"
            },
            {
                "name": "salt",
                "amount": "1 tsp"
            },
            {
                "name": "black pepper",
                "amount": "1/2 tsp"
            },
            {
                "name": "grated parmesan cheese",
                "amount": "1 cup"
            },
            {
                "name": "heavy cream",
                "amount": "1/2 cup"
            }
        ],
        "instructions": [
            "Heat the olive oil in a large saucepan over medium heat.",
            "Add the onion and garlic and cook until softened, about 5 minutes.",
            "Stir in the arborio rice until well coated with the oil.",
            "Pour in the tomato puree and stir until well combined.",
            "Gradually add the chicken or vegetable broth, 1 cup at a time, stirring constantly, until the liquid is absorbed.",
            "Repeat this process until all of the broth has been used and the rice is tender, about 20 minutes.",
            "Stir in the parmesan cheese, heavy cream, salt, and pepper until well combined.",
            "Serve immediately, garnished with additional grated parmesan cheese and chopped fresh basil, if desired."
        ],
        "hints": [
            "Use high-quality parmesan cheese for the best flavor.",
            "Use low-sodium broth for a healthier option.",
            "Stir constantly during the cooking process to prevent the rice from sticking to the bottom of the pan.",
            "For a different flavor profile, try using a different type of cheese, such as gouda or fontina, in place of the parmesan."
        ],
        "id": 102,
        "image": "102_Creamy_tomato_risotto.png"
    },
    {
        "name": "Crispy Fried Tofu",
        "servings": 4,
        "prep_time": "15 minutes",
        "cook_time": "10 minutes",
        "ingredients": [
            {
                "name": "firm tofu",
                "amount": "1 block"
            },
            {
                "name": "all-purpose flour",
                "amount": "1/2 cup"
            },
            {
                "name": "cornstarch",
                "amount": "1/4 cup"
            },
            {
                "name": "baking powder",
                "amount": "1 teaspoon"
            },
            {
                "name": "salt",
                "amount": "1/2 teaspoon"
            },
            {
                "name": "water",
                "amount": "1/4 cup"
            },
            {
                "name": "vegetable oil",
                "amount": "for frying"
            }
        ],
        "instructions": [
            "Cut the tofu into 1-inch cubes and set aside.",
            "In a large bowl, whisk together the flour, cornstarch, baking powder, and salt.",
            "Add the water and whisk until a smooth batter forms.",
            "Heat the vegetable oil in a large saucepan over medium heat until it reaches 350°F.",
            "Dip each tofu cube in the batter to evenly coat, then gently place it in the hot oil.",
            "Fry the tofu in batches, turning occasionally, until golden brown and crispy, about 5 minutes.",
            "Remove the tofu from the oil with a slotted spoon and place it on a paper towel-lined plate to drain.",
            "Serve the crispy fried tofu hot, with your favorite dipping sauce."
        ],
        "hints": [
            "Make sure to use firm tofu for this recipe, as it will hold its shape better during frying.",
            "If the batter is too thick, add a little more water to thin it out.",
            "Be careful not to overcrowd the pan when frying the tofu, as this can lower the temperature of the oil and result in soggy tofu.",
            "Try serving the crispy fried tofu with a dipping sauce, such as sweet chili sauce or soy sauce.",
            "For added flavor, try seasoning the batter with spices or herbs, such as garlic powder or chopped fresh basil."
        ],
        "id": 103,
        "image": "103_Crispy_fried_tofu.png"
    },
    {
        "name": "Lemon Herb Shrimp",
        "servings": 4,
        "prep_time": "10 minutes",
        "cook_time": "5 minutes",
        "ingredients": [
            {
                "name": "large shrimp",
                "amount": "1 pound, peeled and deveined"
            },
            {
                "name": "lemon",
                "amount": "1, zested and juiced"
            },
            {
                "name": "olive oil",
                "amount": "2 tablespoons"
            },
            {
                "name": "fresh parsley",
                "amount": "2 tablespoons, chopped"
            },
            {
                "name": "fresh basil",
                "amount": "2 tablespoons, chopped"
            },
            {
                "name": "garlic",
                "amount": "3 cloves, minced"
            },
            {
                "name": "salt",
                "amount": "1/2 teaspoon"
            },
            {
                "name": "black pepper",
                "amount": "1/4 teaspoon"
            }
        ],
        "instructions": [
            "In a large bowl, whisk together the lemon juice, olive oil, parsley, basil, garlic, salt, and pepper.",
            "Add the shrimp to the bowl and toss to evenly coat in the marinade.",
            "Heat a large skillet over high heat.",
            "Add the shrimp to the hot skillet and cook, stirring occasionally, until pink and cooked through, about 2-3 minutes.",
            "Remove the skillet from heat and stir in the lemon zest.",
            "Serve the lemon herb shrimp hot, with rice or vegetables."
        ],
        "hints": [
            "For extra lemon flavor, try using lemon-infused olive oil.",
            "If desired, substitute the basil and parsley with other herbs such as cilantro or thyme.",
            "To make a more substantial meal, try serving the shrimp over pasta with a sprinkle of grated Parmesan cheese.",
            "For a spicy kick, try adding a pinch of red pepper flakes to the marinade.",
            "To reduce the cooking time, you can use precooked shrimp and just heat them through in the skillet."
        ],
        "id": 104,
        "image": "104_Lemon_herb_shrimp.png"
    },
    {
        "name": "Grilled Tofu Salad",
        "ingredients": [
            {
                "name": "Extra-firm tofu",
                "amount": "14 oz, sliced into 1/2 inch pieces"
            },
            {
                "name": "Olive oil",
                "amount": "2 tbsp"
            },
            {
                "name": "Garlic powder",
                "amount": "1 tsp"
            },
            {
                "name": "Onion powder",
                "amount": "1 tsp"
            },
            {
                "name": "Cumin powder",
                "amount": "1 tsp"
            },
            {
                "name": "Paprika",
                "amount": "1 tsp"
            },
            {
                "name": "Lemon juice",
                "amount": "2 tbsp"
            },
            {
                "name": "Salt",
                "amount": "1 tsp"
            },
            {
                "name": "Black pepper",
                "amount": "1/2 tsp"
            },
            {
                "name": "Lettuce",
                "amount": "6 cups, chopped"
            },
            {
                "name": "Tomatoes",
                "amount": "2 medium, chopped"
            },
            {
                "name": "Cucumber",
                "amount": "1 medium, sliced"
            },
            {
                "name": "Red onion",
                "amount": "1/2 medium, thinly sliced"
            },
            {
                "name": "Croutons",
                "amount": "1 cup"
            },
            {
                "name": "Parmesan cheese",
                "amount": "1/4 cup, grated"
            },
            {
                "name": "Balsamic vinaigrette",
                "amount": "1/4 cup"
            }
        ],
        "instructions": [
            "Preheat the grill to medium-high heat.",
            "In a bowl, combine the tofu with olive oil, garlic powder, onion powder, cumin powder, paprika, lemon juice, salt, and black pepper.",
            "Grill the tofu for 3 to 4 minutes on each side, or until nicely charred.",
            "In a large bowl, combine the lettuce, tomatoes, cucumber, red onion, croutons, Parmesan cheese, and grilled tofu.",
            "Toss with the balsamic vinaigrette until evenly coated.",
            "Serve immediately."
        ],
        "hints": [
            "For a nuttier flavor, you can pan-fry the tofu instead of grilling it.",
            "Add some fresh herbs like basil or parsley for an extra burst of flavor.",
            "Use a store-bought crouton or make your own by toasting some bread cubes in the oven with olive oil and seasonings.",
            "For a vegan version of this salad, omit the Parmesan cheese."
        ],
        "id": 105,
        "image": "105_Grilled_tofu_salad.png"
    },
    {
        "name": "Vegetable Jambalaya",
        "ingredients": [
            {
                "name": "Olive oil",
                "amount": "2 tbsp"
            },
            {
                "name": "Onion",
                "amount": "1 large, chopped"
            },
            {
                "name": "Green bell pepper",
                "amount": "1 large, chopped"
            },
            {
                "name": "Celery",
                "amount": "2 stalks, chopped"
            },
            {
                "name": "Garlic",
                "amount": "3 cloves, minced"
            },
            {
                "name": "Tomato",
                "amount": "1 large, diced"
            },
            {
                "name": "Long-grain white rice",
                "amount": "2 cups"
            },
            {
                "name": "Vegetable broth",
                "amount": "4 cups"
            },
            {
                "name": "Cajun seasoning",
                "amount": "2 tsp"
            },
            {
                "name": "Dried thyme",
                "amount": "1 tsp"
            },
            {
                "name": "Red pepper flakes",
                "amount": "1/4 tsp"
            },
            {
                "name": "Salt",
                "amount": "1 tsp"
            },
            {
                "name": "Black pepper",
                "amount": "1/2 tsp"
            },
            {
                "name": "Zucchini",
                "amount": "1 medium, chopped"
            },
            {
                "name": "Eggplant",
                "amount": "1 medium, chopped"
            },
            {
                "name": "Yellow squash",
                "amount": "1 medium, chopped"
            }
        ],
        "instructions": [
            "Heat olive oil in a large pot over medium heat.",
            "Add onion, green bell pepper, celery, and garlic. Cook until the vegetables are soft, about 5 minutes.",
            "Stir in the tomato and cook for an additional 2 minutes.",
            "Add the rice and stir to coat with the vegetable mixture.",
            "Pour in the vegetable broth and add the cajun seasoning, thyme, red pepper flakes, salt, and black pepper.",
            "Bring to a boil, then reduce heat to low, cover and simmer for 18 to 20 minutes or until the rice is tender and the liquid is absorbed.",
            "Stir in the zucchini, eggplant, and yellow squash and cook until the vegetables are tender, about 5 minutes."
        ],
        "hints": [
            "For a heartier jambalaya, add some cooked, diced tofu or tempeh.",
            "Feel free to substitute your favorite vegetables for the ones listed in the recipe.",
            "If you like your jambalaya spicy, add more red pepper flakes to taste.",
            "Serve with hot sauce on the side for those who like it extra spicy."
        ],
        "id": 106,
        "image": "106_Vegetable_jambalaya.png"
    },
    {
        "name": "BBQ Pork Pizza",
        "serving_size": "4-6",
        "prep_time": "20 minutes",
        "cook_time": "20 minutes",
        "ingredients": [
            {
                "name": "Pizza dough",
                "amount": "1 batch"
            },
            {
                "name": "BBQ sauce",
                "amount": "1 cup"
            },
            {
                "name": "Pork shoulder",
                "amount": "1 lb"
            },
            {
                "name": "Mozzarella cheese",
                "amount": "2 cups"
            },
            {
                "name": "Red onion",
                "amount": "1, thinly sliced"
            },
            {
                "name": "Cilantro",
                "amount": "1/4 cup, chopped"
            }
        ],
        "instructions": [
            "Preheat oven to 500°F (260°C). Place a pizza stone in the oven to preheat.",
            "Roll out the pizza dough to your desired thickness and place it on a floured surface.",
            "Spread the BBQ sauce evenly over the pizza dough, leaving a small border around the edges.",
            "Layer the sliced pork on top of the sauce.",
            "Sprinkle the mozzarella cheese over the pork.",
            "Add the sliced red onion on top of the cheese.",
            "Place the pizza in the oven on the pizza stone and bake for 15-20 minutes, or until the crust is golden brown.",
            "Remove the pizza from the oven and top with fresh cilantro.",
            "Cut the pizza into slices and serve."
        ],
        "hints": [
            "Experiment with different types of BBQ sauces to find your favorite.",
            "Try using leftover pork roast or pulled pork for this recipe.",
            "For extra flavor, add some sliced jalapenos or diced pineapple to the pizza.",
            "If you don't have a pizza stone, you can bake the pizza on a baking sheet or pizza pan."
        ],
        "id": 107,
        "image": "107_Bbq_pork_pizza.png"
    },
    {
        "name": "Shrimp and Grits",
        "serving_size": "4",
        "prep_time": "15 minutes",
        "cook_time": "30 minutes",
        "ingredients": [
            {
                "name": "Stone-ground grits",
                "amount": "4 cups"
            },
            {
                "name": "Water",
                "amount": "8 cups"
            },
            {
                "name": "Salt",
                "amount": "1 tsp"
            },
            {
                "name": "Butter",
                "amount": "4 tbsp"
            },
            {
                "name": "Heavy cream",
                "amount": "1/2 cup"
            },
            {
                "name": "Parmesan cheese",
                "amount": "1/2 cup, grated"
            },
            {
                "name": "Garlic",
                "amount": "3 cloves, minced"
            },
            {
                "name": "Shrimp",
                "amount": "1 lb, peeled and deveined"
            },
            {
                "name": "Olive oil",
                "amount": "2 tbsp"
            },
            {
                "name": "Paprika",
                "amount": "1 tsp"
            },
            {
                "name": "Cayenne pepper",
                "amount": "1/2 tsp"
            },
            {
                "name": "Lemon juice",
                "amount": "2 tbsp"
            },
            {
                "name": "Green onions",
                "amount": "1/4 cup, chopped"
            }
        ],
        "instructions": [
            "In a large saucepan, bring the water to a boil and add the grits, salt, and butter. Stir constantly until the grits have thickened, about 5-7 minutes.",
            "Reduce heat to low and add the heavy cream, parmesan cheese, and minced garlic. Stir until the cheese is melted and the grits are creamy.",
            "Keep the grits warm over low heat while you prepare the shrimp.",
            "In a large skillet, heat the olive oil over medium-high heat.",
            "Add the shrimp and sprinkle with paprika, cayenne pepper, and lemon juice. Cook until the shrimp are pink and cooked through, about 5-7 minutes.",
            "To serve, divide the grits among 4 bowls and top with the shrimp and pan sauce.",
            "Garnish with chopped green onions."
        ],
        "hints": [
            "For extra flavor, try adding some diced bacon or sausage to the skillet when cooking the shrimp.",
            "To make the grits even creamier, use half-and-half or whole milk instead of heavy cream.",
            "Experiment with different types of cheese, such as cheddar or pepper jack, to add some extra depth of flavor to the grits.",
            "Add some hot sauce or diced jalapenos to the grits for a little extra kick of heat."
        ],
        "id": 108,
        "image": "108_Shrimp_and_grits.png"
    },
    {
        "name": "Garlic Mushroom Pasta",
        "serving_size": "4",
        "prep_time": "10 minutes",
        "cook_time": "20 minutes",
        "ingredients": [
            {
                "name": "Penne pasta",
                "amount": "1 lb"
            },
            {
                "name": "Olive oil",
                "amount": "2 tbsp"
            },
            {
                "name": "Garlic",
                "amount": "4 cloves, minced"
            },
            {
                "name": "Mushrooms",
                "amount": "16 oz, sliced"
            },
            {
                "name": "Chicken broth",
                "amount": "1 cup"
            },
            {
                "name": "Heavy cream",
                "amount": "1 cup"
            },
            {
                "name": "Parmesan cheese",
                "amount": "1/2 cup, grated"
            },
            {
                "name": "Salt",
                "amount": "1 tsp"
            },
            {
                "name": "Pepper",
                "amount": "1/2 tsp"
            },
            {
                "name": "Parsley",
                "amount": "1/4 cup, chopped"
            }
        ],
        "instructions": [
            "Cook the pasta according to package instructions until al dente.",
            "Meanwhile, in a large skillet, heat the olive oil over medium heat.",
            "Add the minced garlic and sliced mushrooms and cook until the mushrooms are tender, about 5-7 minutes.",
            "Stir in the chicken broth, heavy cream, parmesan cheese, salt, and pepper.",
            "Bring the mixture to a boil and reduce heat to low. Simmer until the sauce has thickened, about 5-7 minutes.",
            "Drain the pasta and add it to the skillet with the sauce.",
            "Toss the pasta with the sauce until evenly coated.",
            "Garnish with chopped parsley and additional parmesan cheese, if desired."
        ],
        "hints": [
            "For a vegetarian version of this dish, replace the chicken broth with vegetable broth.",
            "Try using different types of mushrooms, such as shiitake or portobello, for a different flavor profile.",
            "Add some sauteed vegetables, such as bell peppers or zucchini, for added color and nutrition.",
            "For a creamier sauce, use half-and-half or whole milk instead of heavy cream."
        ],
        "id": 109,
        "image": "109_Garlic_mushroom_pasta.png"
    },
    {
        "name": "Baked Lemon Tofu",
        "serving_size": "4",
        "prep_time": "15 minutes",
        "cook_time": "30 minutes",
        "ingredients": [
            {
                "name": "Extra-firm tofu",
                "amount": "14 oz, pressed and drained"
            },
            {
                "name": "Lemon juice",
                "amount": "1/4 cup"
            },
            {
                "name": "Olive oil",
                "amount": "2 tbsp"
            },
            {
                "name": "Garlic",
                "amount": "4 cloves, minced"
            },
            {
                "name": "Salt",
                "amount": "1 tsp"
            },
            {
                "name": "Pepper",
                "amount": "1/2 tsp"
            },
            {
                "name": "Parsley",
                "amount": "1/4 cup, chopped"
            }
        ],
        "instructions": [
            "Preheat the oven to 400°F (200°C).",
            "Cut the pressed and drained tofu into 1/2-inch thick slices.",
            "In a large bowl, whisk together the lemon juice, olive oil, minced garlic, salt, and pepper.",
            "Add the tofu slices to the bowl and toss until evenly coated.",
            "Arrange the tofu slices in a single layer on a baking sheet.",
            "Bake for 30 minutes, flipping the tofu slices halfway through, until golden and crispy.",
            "Garnish with chopped parsley and additional lemon juice, if desired."
        ],
        "hints": [
            "For a crispy texture, be sure to press the tofu to remove any excess liquid before baking.",
            "Try using different herbs and spices, such as basil or red pepper flakes, for a different flavor profile.",
            "Serve the baked tofu as a main dish with a side of vegetables or rice.",
            "Leftover baked tofu can be stored in an airtight container in the refrigerator for up to 4 days."
        ],
        "id": 110,
        "image": "110_Baked_lemon_tofu.png"
    },
    {
        "name": "Spicy Beef Nachos",
        "prep_time": "10 minutes",
        "cook_time": "30 minutes",
        "servings": "4-6",
        "ingredients": [
            {
                "name": "ground beef",
                "amount": "1 lb"
            },
            {
                "name": "taco seasoning",
                "amount": "2 tbsp"
            },
            {
                "name": "diced tomatoes and green chilies",
                "amount": "1 can"
            },
            {
                "name": "tortilla chips",
                "amount": "8 oz"
            },
            {
                "name": "shredded cheddar cheese",
                "amount": "2 cups"
            },
            {
                "name": "jalapenos, sliced",
                "amount": "1/2 cup"
            },
            {
                "name": "sour cream",
                "amount": "1/2 cup"
            },
            {
                "name": "fresh cilantro, chopped",
                "amount": "1/4 cup"
            }
        ],
        "instructions": [
            "Preheat oven to 375°F.",
            "In a large skillet, cook ground beef over medium heat until browned.",
            "Drain any excess fat and stir in taco seasoning and diced tomatoes and green chilies.",
            "Layer tortilla chips on the bottom of a large baking dish.",
            "Pour the beef mixture over the tortilla chips and sprinkle with cheddar cheese.",
            "Bake for 10-15 minutes, or until cheese is melted and bubbly.",
            "Remove from oven and top with jalapenos, sour cream, and cilantro.",
            "Serve immediately and enjoy!"
        ],
        "hints": [
            "For extra spice, add additional jalapenos or hot sauce.",
            "Try using seasoned ground turkey or chicken for a healthier alternative.",
            "Add additional toppings such as avocado, lettuce, or salsa for variety.",
            "Use a large baking dish to ensure that the tortilla chips are evenly coated with the beef mixture and cheese."
        ],
        "id": 111,
        "image": "111_Spicy_beef_nachos.png"
    },
    {
        "id": 112,
        "name": "Apple Pie",
        "image": "112_Apple_pie.png",
        "ingredients": [
            {
                "name": "pie crust",
                "quantity": "2",
                "preparation": "store-bought or homemade"
            },
            {
                "name": "apples",
                "quantity": "6-8",
                "preparation": "peeled, cored and thinly sliced"
            },
            {
                "name": "sugar",
                "quantity": "1/2 cup"
            },
            {
                "name": "flour",
                "quantity": "1/4 cup"
            },
            {
                "name": "lemon juice",
                "quantity": "1 tbsp"
            },
            {
                "name": "ground cinnamon",
                "quantity": "1 tsp"
            },
            {
                "name": "nutmeg",
                "quantity": "1/4 tsp"
            },
            {
                "name": "salt",
                "quantity": "1/4 tsp"
            },
            {
                "name": "butter",
                "quantity": "1/4 cup",
                "preparation": "cold and cut into small pieces"
            },
            {
                "name": "egg wash",
                "quantity": "1",
                "preparation": "beaten"
            },
            {
                "name": "sugar",
                "quantity": "1 tbsp",
                "preparation": "for sprinkling"
            }
        ],
        "instructions": [
            "Preheat the oven to 375F (190C).",
            "In a large bowl, mix together the sliced apples, sugar, flour, lemon juice, cinnamon, nutmeg, and salt.",
            "Roll out one of the pie crusts and place it in a 9-inch pie dish.",
            "Fill the pie crust with the apple mixture.",
            "Dot the top of the apples with butter.",
            "Roll out the second pie crust and place it on top of the apples.",
            "Crimp the edges of the pie crust to seal.",
            "Brush the top of the pie crust with the beaten egg wash and sprinkle with sugar.",
            "Bake the pie for 45-50 minutes, or until the crust is golden brown and the filling is bubbling."
        ],
        "hints": [
            "You can also add raisins, cranberries, or nuts for more flavor.",
            "You can also use a mixture of different types of apples for a more complex flavor.",
            "You can also add a tablespoon of cornstarch to thicken the filling.",
            "You can also brush the crust with melted butter for a richer crust.",
            "You can also serve the pie warm with a scoop of ice cream or whipped cream.",
            "For a flakier crust, use cold butter and ice water when making the dough.",
            "For a crispier crust, bake the pie on the lower shelf of the oven.",
            "For a sweeter pie, add more brown sugar to the filling.",
            "For a spicier pie, add more cinnamon or nutmeg to the filling."
        ],
        "story": "Apple pie is a classic dessert that has been enjoyed for generations. It's the perfect combination of sweet, juicy apples and a flaky, buttery crust. This recipe has been passed down from my grandmother and is sure to bring a smile to your face with every bite. Whether you serve it warm with a scoop of vanilla ice cream or cold with a cup of coffee, this pie is sure to become afamily favorite. So, gather your ingredients, preheat the oven, and let's get baking! In no time, the irresistible aroma of apples and cinnamon will fill your kitchen, and you'll be able to share a slice of this delicious pie with your loved ones. It's the perfect dessert for holidays, special occasions, or just a cozy night in. So, go ahead, give this recipe a try, and enjoy a slice of sweet and comforting apple pie!"
    },
    {
        "id": 113,
        "name": "Tom Yum",
        "image": "113_Tom_yum.png",
        "ingredients": [
            {
                "name": "chicken or shrimp",
                "quantity": "8 oz",
                "preparation": "cut into bite-size pieces"
            },
            {
                "name": "lemongrass",
                "quantity": "2 stalks",
                "preparation": "bruised and thinly sliced"
            },
            {
                "name": "galangal",
                "quantity": "1 inch",
                "preparation": "sliced"
            },
            {
                "name": "kaffir lime leaves",
                "quantity": "4-5 leaves"
            },
            {
                "name": "mushrooms",
                "quantity": "8 oz",
                "preparation": "sliced"
            },
            {
                "name": "fish sauce",
                "quantity": "2-3 tbsp"
            },
            {
                "name": "lime juice",
                "quantity": "1/4 cup"
            },
            {
                "name": "palm sugar",
                "quantity": "2 tbsp"
            },
            {
                "name": "chili flakes or fresh chili",
                "quantity": "1 tbsp",
                "preparation": "to taste"
            },
            {
                "name": "cilantro",
                "quantity": "1/4 cup",
                "preparation": "chopped for garnish"
            }
        ],
        "instructions": [
            "In a large pot, bring 4 cups of water to a boil.",
            "Add the lemongrass, galangal, kaffir lime leaves and chili to the pot and simmer for 5 minutes.",
            "Add the chicken or shrimp and mushrooms to the pot, and cook until the meat is cooked through and the mushrooms are tender, about 5 minutes.",
            "Remove from heat and stir in the fish sauce, lime juice, and palm sugar.",
            "Taste and adjust seasoning as needed.",
            "Garnish with cilantro and serve with rice, if desired."
        ],
        "hints": [
            "If you're using shrimp, make sure to add it in the last minute of cooking to avoid over-cooking it.",
            "If you're using shrimp, you can use shrimp stock instead of water to give it more flavor.",
            "If you're using chicken, you can use chicken stock instead of water to give it more flavor.",
            "If you can't find galangal, you can substitute it with ginger.",
            "If you can't find kaffir lime leaves, you can substitute it with regular lime leaves or zest of one lime."
        ]
    },
    {
        "id": 114,
        "name": "Salmon avocado Poke bowl",
        "image": "114_Salmon_avocado_poke_bowl.png",
        "ingredients": [
            {
                "name": "raw salmon",
                "quantity": "8 oz",
                "preparation": "cubed"
            },
            {
                "name": "avocado",
                "quantity": "1 ripe",
                "preparation": "cubed"
            },
            {
                "name": "cucumber",
                "quantity": "1/2 cup",
                "preparation": "diced"
            },
            {
                "name": "red onion",
                "quantity": "1/2 cup",
                "preparation": "diced"
            },
            {
                "name": "jalapeno",
                "quantity": "1/4 cup",
                "preparation": "diced (optional)"
            },
            {
                "name": "soy sauce",
                "quantity": "2 tbsp"
            },
            {
                "name": "rice vinegar",
                "quantity": "1 tbsp"
            },
            {
                "name": "sesame oil",
                "quantity": "1 tsp"
            },
            {
                "name": "honey",
                "quantity": "1 tsp"
            },
            {
                "name": "grated ginger",
                "quantity": "1/2 tsp"
            },
            {
                "name": "garlic powder",
                "quantity": "1/4 tsp"
            },
            {
                "name": "black pepper",
                "quantity": "1/4 tsp"
            },
            {
                "name": "sushi rice",
                "quantity": "2 cups",
                "preparation": "cooked"
            },
            {
                "name": "sesame seeds",
                "quantity": "as needed",
                "preparation": "garnish"
            },
            {
                "name": "green onions",
                "quantity": "as needed",
                "preparation": "garnish"
            }
        ],
        "instructions": [
            "In a small bowl, mix together soy sauce, rice vinegar, sesame oil, honey, ginger, garlic powder, and black pepper.",
            "In a large bowl, combine cubed salmon, avocado, cucumber, red onion, and jalapeno (if using). Pour the sauce over the top and toss to coat evenly.",
            "Let the poke marinate for at least 15 minutes in the fridge.",
            "To serve, divide the cooked sushi rice among bowls. Top with the poke mixture and garnish with sesame seeds and green onions."
        ],
        "hints": [
            "You can also add some diced mango or pineapple for a sweeter taste.",
            "If you like your poke bowl spicy, add more jalapeno or some sriracha sauce to the marinade.",
            "If you don't have rice vinegar, you can use apple cider vinegar or white vinegar instead.",
            "For a gluten-free option, use tamari sauce instead of soy sauce."
        ]
    },
    {
        "id": 115,
        "name": "Ceviche",
        "image": "115_Ceviche.png",
        "ingredients": [
            {
                "name": "fresh fish fillets",
                "quantity": "1 lb",
                "preparation": "cubed (such as sea bass, halibut, or tilapia)"
            },
            {
                "name": "lime juice",
                "quantity": "1 cup"
            },
            {
                "name": "lemon juice",
                "quantity": "1/2 cup"
            },
            {
                "name": "orange juice",
                "quantity": "1/2 cup"
            },
            {
                "name": "red onion",
                "quantity": "1/2 cup",
                "preparation": "finely diced"
            },
            {
                "name": "cilantro",
                "quantity": "1/4 cup",
                "preparation": "chopped"
            },
            {
                "name": "jalapeno",
                "quantity": "1",
                "preparation": "seeded and finely diced (optional)"
            },
            {
                "name": "salt",
                "quantity": "1 tsp"
            },
            {
                "name": "black pepper",
                "quantity": "1/4 tsp"
            },
            {
                "name": "avocado",
                "quantity": "1",
                "preparation": "diced"
            },
            {
                "name": "corn",
                "quantity": "1/2 cup",
                "preparation": "cooked and cooled"
            }
        ],
        "instructions": [
            "In a large mixing bowl, combine the fish, lime juice, lemon juice, orange juice, red onion, cilantro, jalapeno (if using), salt, and black pepper. Stir gently to combine.",
            "Cover and refrigerate for at least 2 hours or up to 8 hours, stirring occasionally, until the fish is opaque and cooked through.",
            "To serve, drain off any excess liquid and gently stir in the diced avocado and corn.",
            "Serve the ceviche in small bowls or cups, garnished with additional cilantro and lime wedges, if desired."
        ],
        "hints": [
            "It is important to use fresh and raw fish to make ceviche, as the acid in the marinade cooks the fish. So, use fish that is very fresh and sushi-grade.",
            "You can use any type of citrus juice that you like, such as grapefruit, tangerine or a mix of them.",
            "You can also add some diced mango or pineapple for a sweeter taste.",
            "If you like your ceviche spicy, add more jalapeno or some sriracha sauce to the marinade.",
            "For a gluten-free option, use tamari sauce instead of soy sauce."
        ]
    },
    {
        "id": 116,
        "name": "Puff Pastry Tangerines",
        "image": "116_Puff_pastry_tangerines.png",
        "servings": 8,
        "prep_time": "20 minutes",
        "cook_time": "20 minutes",
        "ingredients": [
            {
                "name": "Puff Pastry",
                "quantity": "1 sheet"
            },
            {
                "name": "Tangerines",
                "quantity": 4
            },
            {
                "name": "Sugar",
                "quantity": "3 tablespoons"
            },
            {
                "name": "Butter",
                "quantity": 2,
                "unit": "tablespoons"
            },
            {
                "name": "Ground cinnamon",
                "quantity": 1,
                "unit": "teaspoon"
            },
            {
                "name": "Egg",
                "quantity": 1,
                "unit": ""
            },
            {
                "name": "Powdered sugar",
                "quantity": 3,
                "unit": "tablespoons"
            }
        ],
        "instructions": [
            "Preheat oven to 400°F (200°C)",
            "Peel and slice tangerines into thin rounds.",
            "Melt butter in a pan over medium heat. Add tangerine slices and sugar, cook for 1-1 minutes until the sugar dissolves.",
            "Add cinnamon and stir.",
            "Roll out the puff pastry on a lightly floured surface.",
            "Cut the pastry into 8 equal squares.",
            "Place a spoonful of the tangerine mixture onto each square.",
            "Brush the edges with beaten egg.",
            "Fold each square into a triangle and press the edges to seal.",
            "Bake for 20 minutes or until golden brown.",
            "Sprinkle with powdered sugar before serving."
        ],
        "hints": [
            "For a crispier pastry, you can prick the surface of the pastry with a fork before baking.",
            "You can also add a splash of orange juice to the tangerine mixture for extra flavor.",
            "Serve warm for best results."
        ]
    },
    {
        "id": 117,
        "name": "Tomato Soup",
        "image": "117_Tomato_soup.png",
        "ingredients": [
            {
                "name": "ripe tomatoes",
                "quantity": "4-5 cups",
                "preparation": "chopped"
            },
            {
                "name": "onion",
                "quantity": "1 medium",
                "preparation": "chopped"
            },
            {
                "name": "garlic",
                "quantity": "2 cloves",
                "preparation": "minced"
            },
            {
                "name": "butter",
                "quantity": "1 tbsp"
            },
            {
                "name": "olive oil",
                "quantity": "1 tbsp"
            },
            {
                "name": "salt",
                "quantity": "1 tsp"
            },
            {
                "name": "black pepper",
                "quantity": "1/4 tsp"
            },
            {
                "name": "chicken or vegetable broth",
                "quantity": "4 cups"
            },
            {
                "name": "basil",
                "quantity": "1/4 cup",
                "preparation": "chopped for garnish"
            }
        ],
        "instructions": [
            "In a large pot, heat the butter and olive oil over medium heat.",
            "Add the onion and garlic, and sauté until softened, about 5 minutes.",
            "Add the chopped tomatoes, salt, and black pepper to the pot.",
            "Stir in the broth and bring the mixture to a boil.",
            "Reduce the heat to low and simmer for 20-25 minutes, until the tomatoes are very soft.",
            "Remove from heat and use an immersion blender to puree the soup until smooth.",
            "Taste and adjust seasoning as needed.",
            "Garnish with basil and serve."
        ],
        "hints": [
            "You can also add some diced carrots, celery, or bell peppers to the soup for more vegetables.",
            "If you like your soup spicy, you can add some red pepper flakes or cayenne pepper to the seasoning.",
            "You can also add a dollop of sour cream or croutons for texture and added flavor.",
            "You can also use canned tomatoes if fresh are not available.",
            "You can use any type of broth you prefer, such as beef or mushroom broth."
        ]
    },
    {
        "id": 118,
        "name": "Creamy Cucumber and Tomato Salad",
        "image": "118_Creamy_cucumber_and_tomato_salad.png",
        "ingredients": [
            {
                "name": "cucumbers",
                "quantity": "2",
                "preparation": "sliced"
            },
            {
                "name": "tomatoes",
                "quantity": "2",
                "preparation": "diced"
            },
            {
                "name": "red onion",
                "quantity": "1/4",
                "preparation": "sliced"
            },
            {
                "name": "feta cheese",
                "quantity": "1/2 cup",
                "preparation": "crumbled"
            },
            {
                "name": "fresh dill",
                "quantity": "1/4 cup",
                "preparation": "chopped"
            },
            {
                "name": "mayonnaise",
                "quantity": "1/4 cup"
            },
            {
                "name": "sour cream",
                "quantity": "1/4 cup"
            },
            {
                "name": "lemon juice",
                "quantity": "1 tbsp"
            },
            {
                "name": "salt",
                "quantity": "1/4 tsp"
            },
            {
                "name": "black pepper",
                "quantity": "1/4 tsp"
            }
        ],
        "instructions": [
            "In a large bowl, combine cucumbers, tomatoes, red onion, feta cheese, and dill.",
            "In a small bowl, whisk together mayonnaise, sour cream, lemon juice, salt and pepper.",
            "Pour the dressing over the salad and toss to coat.",
            "Refrigerate for at least 30 minutes to allow the flavors to meld.",
            "Taste and adjust seasoning as needed.",
            "Serve chilled and enjoy!"
        ],
        "hints": [
            "You can also add some sliced bell peppers or avocado for more vegetables.",
            "You can also use other herbs such as parsley or mint instead of dill.",
            "If you prefer a creamier salad, you can add more mayonnaise or sour cream.",
            "If you prefer a tangier salad, you can add more lemon juice."
        ]
    },
    {
        "id": 119,
        "name": "Spring Rolls",
        "image": "119_Spring_rolls.png",
        "ingredients": [
            {
                "name": "rice paper wrappers",
                "quantity": "1 package"
            },
            {
                "name": "shrimp",
                "quantity": "8 oz",
                "preparation": "peeled and deveined"
            },
            {
                "name": "vermicelli noodles",
                "quantity": "4 oz",
                "preparation": "cooked according to package instructions"
            },
            {
                "name": "lettuce",
                "quantity": "1 head",
                "preparation": "leaves separated"
            },
            {
                "name": "mint leaves",
                "quantity": "1/4 cup"
            },
            {
                "name": "basil leaves",
                "quantity": "1/4 cup"
            },
            {
                "name": "cilantro",
                "quantity": "1/4 cup"
            },
            {
                "name": "carrots",
                "quantity": "2",
                "preparation": "julienned"
            },
            {
                "name": "peanut sauce",
                "quantity": "1/4 cup"
            },
            {
                "name": "sweet chili sauce",
                "quantity": "1/4 cup"
            }
        ],
        "instructions": [
            "Cook the shrimp in a pan or grill until they turn pink and are cooked through, about 2-3 minutes per side. Remove from heat and slice into small pieces.",
            "Fill a shallow dish with warm water.",
            "Dip one rice paper wrapper into the warm water for about 10-15 seconds, or until it becomes pliable.",
            "Lay the wrapper on a clean surface.",
            "Place a lettuce leaf, a small handful of vermicelli noodles, some herbs, some shrimp, some julienned carrots, and a sprinkle of cilantro on the wrapper, leaving about 2 inches of space at the top and bottom of the wrapper.",
            "Fold the bottom of the wrapper over the filling, tucking it in tightly.",
            "Fold in the sides of the wrapper and continue rolling until the spring roll is sealed.",
            "Repeat with the remaining wrappers and filling.",
            "Serve with peanut sauce and sweet chili sauce for dipping."
        ],
        "hints": [
            "You can also use chicken, pork, or tofu instead of shrimp.",
            "You can also add some thinly sliced bell pepper or cucumber for more vegetables.",
            "If you prefer a sweeter sauce, you can add more sweet chili sauce. If you prefer a saltier sauce, you can add more soy sauce.",
            "You can also serve the spring rolls with a dipping sauce made with fish sauce, lime juice, sugar and garlic for a more authentic Thai taste."
        ]
    },
    {
        "id": 120,
        "name": "Chicken in Sweet and Sour Sauce",
        "image": "120_Chicken_in_sweet_and_sour_sauce.png",
        "ingredients": [
            {
                "name": "chicken breast",
                "quantity": "1 lb",
                "preparation": "cut into bite-size pieces"
            },
            {
                "name": "cornstarch",
                "quantity": "1/4 cup"
            },
            {
                "name": "salt",
                "quantity": "1 tsp"
            },
            {
                "name": "black pepper",
                "quantity": "1/4 tsp"
            },
            {
                "name": "vegetable oil",
                "quantity": "1/4 cup"
            },
            {
                "name": "garlic",
                "quantity": "2 cloves",
                "preparation": "minced"
            },
            {
                "name": "ginger",
                "quantity": "1 tsp",
                "preparation": "grated"
            },
            {
                "name": "red bell pepper",
                "quantity": "1",
                "preparation": "diced"
            },
            {
                "name": "green bell pepper",
                "quantity": "1",
                "preparation": "diced"
            },
            {
                "name": "pineapple",
                "quantity": "1 cup",
                "preparation": "diced"
            },
            {
                "name": "brown sugar",
                "quantity": "1/4 cup"
            },
            {
                "name": "apple cider vinegar",
                "quantity": "2 tbsp"
            },
            {
                "name": "soy sauce",
                "quantity": "2 tbsp"
            },
            {
                "name": "water",
                "quantity": "1/4 cup"
            },
            {
                "name": "scallions",
                "quantity": "1/4 cup",
                "preparation": "chopped for garnish"
            }
        ],
        "instructions": [
            "In a shallow dish, combine chicken, cornstarch, salt, and pepper. Toss to coat.",
            "In a large skillet or wok, heat oil over high heat. Add chicken and stir-fry for 3-4 minutes, until browned.",
            "Remove chicken from skillet and set aside.",
            "Add garlic and ginger to the skillet and stir-fry for 30 seconds.",
            "Add red and green bell peppers and pineapple, and stir-fry for 2-3 minutes.",
            "In a small bowl, whisk together brown sugar, apple cider vinegar, soy sauce, and water.",
            "Pour the mixture into the skillet and bring to a simmer.",
            "Add the chicken back to the skillet and stir until the sauce thickens and the chicken is heated through.",
            "Garnish with scallions and serve over rice."
        ],
        "hints": [
            "You can use pork or beef instead of chicken.",
            "You can also add some diced onion or celery for more vegetables.",
            "If you prefer a sweeter sauce, you can add more brown sugar. If you prefer a tangier sauce, you can add more apple cider vinegar.",
            "You can also add some red pepper flakes or diced fresh chili for a spicy kick.",
            "You can also use canned pineapple if fresh is not available."
        ]
    },
    {
        "id": 121,
        "name": "Lemonade",
        "image": "121_Lemonade.png",
        "ingredients": [
            {
                "name": "lemons",
                "quantity": "1 cup",
                "preparation": "juiced"
            },
            {
                "name": "sugar",
                "quantity": "1/2 cup"
            },
            {
                "name": "water",
                "quantity": "4 cups"
            },
            {
                "name": "ice",
                "quantity": "as needed"
            },
            {
                "name": "mint leaves",
                "quantity": "1/4 cup",
                "preparation": "chopped for garnish"
            }
        ],
        "instructions": [
            "In a small saucepan, combine the sugar and 1 cup of water.",
            "Bring to a boil and stir until the sugar has completely dissolved.",
            "Remove from heat and let it cool.",
            "In a large pitcher, combine the lemon juice, sugar syrup, and remaining 3 cups of water.",
            "Stir well to combine.",
            "Taste and adjust sweetness as needed.",
            "Add ice and garnish with mint leaves.",
            "Serve chilled and enjoy!"
        ],
        "hints": [
            "You can also add some sliced lemons or berries to the pitcher for added flavor and color.",
            "You can also use honey or agave nectar instead of sugar for a different sweetness.",
            "If you prefer a stronger lemon flavor, you can add more lemons.",
            "You can also make a larger batch and store it in the refrigerator for up to 3 days."
        ]
    },
    {
        "id": 122,
        "name": "Bruschetta",
        "image": "122_Bruschetta.png",
        "ingredients": [
            {
                "name": "loaf of French bread",
                "quantity": "1"
            },
            {
                "name": "garlic cloves",
                "quantity": "4",
                "preparation": "halved"
            },
            {
                "name": "extra-virgin olive oil",
                "quantity": "1/4 cup"
            },
            {
                "name": "tomatoes",
                "quantity": "4",
                "preparation": "diced"
            },
            {
                "name": "basil leaves",
                "quantity": "1/4 cup",
                "preparation": "chopped"
            },
            {
                "name": "salt",
                "quantity": "1/4 tsp"
            },
            {
                "name": "black pepper",
                "quantity": "1/4 tsp"
            },
            {
                "name": "balsamic glaze",
                "quantity": "2 tbsp",
                "preparation": "optional"
            }
        ],
        "instructions": [
            "Preheat the grill or broiler to high heat.",
            "Slice the bread into 1/2-inch thick slices.",
            "Brush both sides of each slice with olive oil.",
            "Grill or broil the bread for 1-2 minutes per side, or until toasted and golden brown.",
            "Rub the cut side of the garlic over the toasted bread.",
            "In a medium bowl, toss together the tomatoes, basil, salt, and pepper.",
            "Spoon the tomato mixture over the bread.",
            "Drizzle with balsamic glaze, if desired.",
            "Serve immediately."
        ],
        "hints": [
            "You can also add some chopped fresh mozzarella or feta cheese for added flavor.",
            "You can also add some sliced red onion or diced avocado for more vegetables.",
            "If you prefer a sweeter bruschetta, you can add more balsamic glaze or honey.",
            "If you prefer a spicier bruschetta, you can add some red pepper flakes or diced fresh chili to the tomato mixture."
        ]
    },
    {
        "id": 123,
        "name": "Spaghetti Bolognese",
        "image": "123_Spaghetti_bolognese.png",
        "ingredients": [
            {
                "name": "spaghetti",
                "quantity": "1 lb"
            },
            {
                "name": "extra-virgin olive oil",
                "quantity": "1/4 cup"
            },
            {
                "name": "ground beef",
                "quantity": "1 lb"
            },
            {
                "name": "onion",
                "quantity": "1",
                "preparation": "chopped"
            },
            {
                "name": "carrots",
                "quantity": "2",
                "preparation": "chopped"
            },
            {
                "name": "celery",
                "quantity": "2",
                "preparation": "chopped"
            },
            {
                "name": "garlic",
                "quantity": "4 cloves",
                "preparation": "minced"
            },
            {
                "name": "tomato sauce",
                "quantity": "1 can (28 oz)"
            },
            {
                "name": "crushed tomatoes",
                "quantity": "1 can (28 oz)"
            },
            {
                "name": "red wine",
                "quantity": "1 cup"
            },
            {
                "name": "sugar",
                "quantity": "1 tsp"
            },
            {
                "name": "oregano",
                "quantity": "1 tsp"
            },
            {
                "name": "basil",
                "quantity": "1 tsp"
            },
            {
                "name": "salt",
                "quantity": "1 tsp"
            },
            {
                "name": "black pepper",
                "quantity": "1/4 tsp"
            },
            {
                "name": "Parmesan cheese",
                "quantity": "1/4 cup",
                "preparation": "grated"
            }
        ],
        "instructions": [
            "Cook the spaghetti according to the package instructions until al dente. Drain and set aside.",
            "In a large pot or Dutch oven, heat the olive oil over medium heat.",
            "Add the beef and cook until browned, about 5-7 minutes.",
            "Add the onion, carrots, celery, and garlic and cook until softened, about 5-7 minutes.",
            "Stir in the tomato sauce, crushed tomatoes, red wine, sugar, oregano, basil, salt, and pepper.",
            "Bring the mixture to a simmer and cook for 30 minutes, or until the sauce has thickened.",
            "Taste and adjust seasoning as needed.",
            "Serve the sauce over the cooked spaghetti and top with grated Parmesan cheese."
        ],
        "hints": [
            "You can also use ground turkey or pork instead of beef.",
            "You can also add some diced mushrooms or bell peppers for more vegetables.",
            "If you prefer a sweeter sauce, you can add more sugar. If you prefer a saltier sauce, you can add more salt.",
            "For a richer sauce, you can add a splash of cream or a dollop of ricotta cheese before serving.",
            "You can also add a sprinkle of red pepper flakes for a spicy kick.",
            "Leftover sauce can be frozen for up to 3 months."
        ]
    },
    {
        "id": 124,
        "name": "Borscht Soup",
        "image": "124_Borscht_soup.png",
        "ingredients": [
            {
                "name": "beef broth",
                "quantity": "8 cups"
            },
            {
                "name": "beef chuck roast",
                "quantity": "1 lb",
                "preparation": "cut into small cubes"
            },
            {
                "name": "onion",
                "quantity": "1",
                "preparation": "chopped"
            },
            {
                "name": "carrots",
                "quantity": "3",
                "preparation": "chopped"
            },
            {
                "name": "celery",
                "quantity": "2 stalks",
                "preparation": "chopped"
            },
            {
                "name": "beets",
                "quantity": "2",
                "preparation": "peeled and grated"
            },
            {
                "name": "potatoes",
                "quantity": "2",
                "preparation": "peeled and diced"
            },
            {
                "name": "cabbage",
                "quantity": "1/4 head",
                "preparation": "shredded"
            },
            {
                "name": "tomato paste",
                "quantity": "1/4 cup"
            },
            {
                "name": "dill",
                "quantity": "1/4 cup",
                "preparation": "chopped"
            },
            {
                "name": "sour cream",
                "quantity": "1/4 cup",
                "preparation": "optional"
            },
            {
                "name": "salt",
                "quantity": "1 tsp"
            },
            {
                "name": "black pepper",
                "quantity": "1/4 tsp"
            }
        ],
        "instructions": [
            "In a large pot or Dutch oven, bring the beef broth to a simmer over medium heat.",
            "Add the beef, onion, carrots, celery, beets, potatoes, cabbage, tomato paste, dill, salt and pepper.",
            "Bring the mixture to a simmer and cook for 1-2 hours, or until the meat is tender and the vegetables are cooked through.",
            "Remove the beef from the pot and shred it with two forks. Return the shredded beef to the pot.",
            "Taste and adjust seasoning as needed.",
            "Serve the soup hot, with a dollop of sour cream on top, if desired."
        ],
        "hints": [
            "You can also use chicken or pork instead of beef.",
            "You can also add some sliced mushrooms or diced bell peppers for more vegetables.",
            "If you prefer a sweeter soup, you can add more sugar. If you prefer a saltier soup, you can add more salt.",
            "For a smoother soup, you can puree some of the vegetables before adding them to the pot.",
            "You can also add a sprinkle of chopped fresh parsley or chives for garnish."
        ]
    },
    {
        "id": 125,
        "name": "Ramen",
        "image": "125_Ramen.png",
        "ingredients": [
            {
                "name": "ramen noodles",
                "quantity": "4 servings"
            },
            {
                "name": "pork belly",
                "quantity": "1 lb",
                "preparation": "sliced"
            },
            {
                "name": "soy sauce",
                "quantity": "1/4 cup"
            },
            {
                "name": "mirin",
                "quantity": "2 tbsp"
            },
            {
                "name": "sugar",
                "quantity": "1 tbsp"
            },
            {
                "name": "ginger",
                "quantity": "1 tbsp",
                "preparation": "grated"
            },
            {
                "name": "garlic",
                "quantity": "2 cloves",
                "preparation": "minced"
            },
            {
                "name": "scallions",
                "quantity": "2",
                "preparation": "sliced"
            },
            {
                "name": "chicken broth",
                "quantity": "8 cups"
            },
            {
                "name": "dashi powder",
                "quantity": "1 tsp"
            },
            {
                "name": "hard-boiled eggs",
                "quantity": "4"
            },
            {
                "name": "bok choy",
                "quantity": "4 heads",
                "preparation": "halved"
            },
            {
                "name": "bean sprouts",
                "quantity": "1 cup"
            },
            {
                "name": "seaweed",
                "quantity": "1/4 cup",
                "preparation": "dried"
            },
            {
                "name": "sesame oil",
                "quantity": "1 tsp"
            },
            {
                "name": "white pepper",
                "quantity": "1/4 tsp"
            },
            {
                "name": "nori sheets",
                "quantity": "4",
                "preparation": "toasted"
            },
            {
                "name": "chili oil",
                "quantity": "1 tbsp",
                "preparation": "optional"
            },
            {
                "name": "sesame seeds",
                "quantity": "1 tbsp",
                "preparation": "toasted"
            }
        ],
        "instructions": [
            "In a small bowl, whisk together the soy sauce, mirin, sugar, ginger, and garlic.",
            "In a pan over medium-high heat, cook the pork belly until browned and crispy, about 5-7 minutes.",
            "Remove the pork from the pan and set aside.",
            "In the same pan, add the scallions and cook for 1-2 minutes, until softened.",
            "Add the chicken broth and dashi powder, and bring to a simmer.",
            "Cook the ramen noodles according to the package instructions, and divide among four bowls.",
            "Add the cooked pork belly, hard-boiled eggs, bok choy, bean sprouts, seaweed, and cooked scallions.",
            "Pour the broth over the noodles and vegetables.",
            "Sprinkle with sesame oil, white pepper, sesame seeds, chili oil, and serve with toasted nori sheets on the side."
        ],
        "hints": [
            "You can also use chicken, beef, or tofu instead of pork belly.",
            "You can also add mushrooms for more flavor.",
            "You can also add some miso paste for a more complex flavor.",
            "You can also add some Sriracha or chili flakes for a spicier kick.",
            "You can also add some lime or lemon juice for a tangy twist."
        ]
    },
    {
        "id": 126,
        "name": "Chicken baked with potatoes",
        "image": "126_Chicken_baked_with_potatoes.png",
        "ingredients": [
            {
                "name": "chicken legs and thighs",
                "quantity": "8 pieces"
            },
            {
                "name": "Potatoes",
                "quantity": "1.5 lbs",
                "preparation": "peeled and cubed"
            },
            {
                "name": "Onion",
                "quantity": "1 medium",
                "preparation": "diced"
            },
            {
                "name": "Garlic",
                "quantity": "4 cloves",
                "preparation": "minced"
            },
            {
                "name": "Olive oil",
                "quantity": "2 tbsp"
            },
            {
                "name": "Salt",
                "quantity": "1 tsp"
            },
            {
                "name": "Black pepper",
                "quantity": "1/2 tsp"
            },
            {
                "name": "Rosemary",
                "quantity": "1 tsp",
                "preparation": "chopped"
            },
            {
                "name": "Thyme",
                "quantity": "1 tsp",
                "preparation": "chopped"
            },
            {
                "name": "Lemon",
                "quantity": "1",
                "preparation": "juiced"
            }
        ],
        "instructions": [
            "Preheat the oven to 375°F (190°C).",
            "In a large mixing bowl, combine the potatoes, onion, garlic, olive oil, salt, black pepper, rosemary, thyme, and lemon juice.",
            "In a large baking dish, place the chicken legs and thighs in a single layer.",
            "Spoon the potato mixture around the chicken in the baking dish.",
            "Cover the baking dish with foil and bake for 45 minutes.",
            "Remove the foil and bake for an additional 25-30 minutes, or until the chicken is cooked through and the potatoes are tender and golden brown.",
            "Remove from oven, let it cool for 5 minutes before serving."
        ],
        "hints": [
            "You can also add some carrots, celery, or bell peppers to the dish for more vegetables.",
            "If you like your dish spicy, you can add some red pepper flakes or cayenne pepper to the seasoning.",
            "If you want a crispier skin on the chicken, you can brush the chicken with melted butter or oil before baking.",
            "You can use any type of herbs you have on hand, like oregano or parsley instead of rosemary and thyme."
        ]
    },
    {
        "id": 127,
        "name": "Gyoza",
        "image": "127_Gyoza.png",
        "ingredients": [
            {
                "name": "gyoza wrappers",
                "quantity": "30-40"
            },
            {
                "name": "ground pork",
                "quantity": "1 lb"
            },
            {
                "name": "cabbage",
                "quantity": "1/4 head",
                "preparation": "finely chopped"
            },
            {
                "name": "scallions",
                "quantity": "4",
                "preparation": "finely chopped"
            },
            {
                "name": "ginger",
                "quantity": "1 tbsp",
                "preparation": "grated"
            },
            {
                "name": "garlic",
                "quantity": "2 cloves",
                "preparation": "minced"
            },
            {
                "name": "soy sauce",
                "quantity": "2 tbsp"
            },
            {
                "name": "sake",
                "quantity": "1 tbsp"
            },
            {
                "name": "sugar",
                "quantity": "1 tsp"
            },
            {
                "name": "salt",
                "quantity": "1/4 tsp"
            },
            {
                "name": "pepper",
                "quantity": "1/4 tsp"
            },
            {
                "name": "sesame oil",
                "quantity": "1 tsp"
            },
            {
                "name": "flour",
                "quantity": "1 tbsp",
                "preparation": "for dusting"
            },
            {
                "name": "water",
                "quantity": "1/4 cup",
                "preparation": "for sealing the gyoza"
            }
        ],
        "instructions": [
            "In a large bowl, mix together the pork, cabbage, scallions, ginger, garlic, soy sauce, sake, sugar, salt, pepper, and sesame oil.",
            "Place a gyoza wrapper on a lightly floured surface and spoon 1 tablespoon of the filling in the center.",
            "Using your finger or a small brush, wet the edges of the wrapper with water.",
            "Fold the wrapper in half to form a half-moon shape, and pleat the edges to seal the gyoza.",
            "Repeat with the remaining wrappers and filling.",
            "Heat a skillet or pan over medium-high heat and add a small amount of oil.",
            "Arrange the gyoza in the skillet or pan, and cook for 2-3 minutes, or until the bottom is golden brown.",
            "Add 1/4 cup of water to the skillet or pan, and cover with a lid.",
            "Cook for an additional 2-3 minutes, or until the gyoza are cooked through and the water has evaporated."
        ],
        "hints": [
            "You can also use ground chicken, beef or shrimp instead of pork.",
            "You can also add some chopped mushrooms or diced vegetables to the filling.",
            "You can also serve the gyoza with a dipping sauce made of soy sauce, rice vinegar, and chili oil.",
            "You can also pan-fry the gyoza with some sliced garlic and ginger for added flavor.",
            "For a crispy texture, you can also deep-fry the gyoza until golden brown."
        ]
    },
    {
        "id": 128,
        "name": "Shrimp in Curry Sauce with Rice",
        "image": "128_Shrimp_in_curry_sauce_with_rice.png",
        "ingredients": [
            {
                "name": "shrimps",
                "quantity": "1 lb",
                "preparation": "peeled and deveined"
            },
            {
                "name": "white rice",
                "quantity": "2 cups",
                "preparation": "rinsed"
            },
            {
                "name": "coconut milk",
                "quantity": "1 can"
            },
            {
                "name": "curry powder",
                "quantity": "1-2 tbsp"
            },
            {
                "name": "onion",
                "quantity": "1",
                "preparation": "diced"
            },
            {
                "name": "ginger",
                "quantity": "1 tbsp",
                "preparation": "grated"
            },
            {
                "name": "garlic",
                "quantity": "2 cloves",
                "preparation": "minced"
            },
            {
                "name": "tomato",
                "quantity": "1",
                "preparation": "diced"
            },
            {
                "name": "salt",
                "quantity": "1/2 tsp"
            },
            {
                "name": "pepper",
                "quantity": "1/4 tsp"
            },
            {
                "name": "vegetable oil",
                "quantity": "1 tbsp"
            },
            {
                "name": "cilantro",
                "quantity": "1/4 cup",
                "preparation": "chopped"
            },
            {
                "name": "lime wedges",
                "quantity": "1",
                "preparation": "optional"
            }
        ],
        "instructions": [
            "Cook the rice according to package instructions, and keep warm.",
            "In a pan over medium-high heat, add the vegetable oil and sauté the onion, ginger, and garlic until softened, about 3-5 minutes.",
            "Add the curry powder and cook for an additional 1-2 minutes.",
            "Stir in the diced tomato and cook for 2-3 minutes.",
            "Add the coconut milk, salt and pepper and bring to a simmer.",
            "Add the shrimp and cook for 2-3 minutes, or until the shrimp are pink and cooked through.",
            "Serve the curry over the cooked rice, and garnish with cilantro and lime wedges if desired."
        ],
        "hints": [
            "You can also use chicken, beef, or tofu instead of shrimp.",
            "You can also add some vegetables like bell pepper, carrots or zucchini to the curry.",
            "You can also adjust the amount of curry powder to your desired level of spiciness.",
            "You can also add some cashews or peanuts for a crunchy texture.",
            "You can also serve the curry with naan or roti bread."
        ]
    },
    {
        "id": 129,
        "name": "Cutlets",
        "image": "129_Cutlets.png",
        "ingredients": [
            {
                "name": "ground meat",
                "quantity": "1 lb",
                "preparation": "beef, pork, chicken or lamb"
            },
            {
                "name": "onion",
                "quantity": "1",
                "preparation": "finely chopped"
            },
            {
                "name": "garlic",
                "quantity": "2 cloves",
                "preparation": "minced"
            },
            {
                "name": "bread crumbs",
                "quantity": "1 cup"
            },
            {
                "name": "milk",
                "quantity": "1/4 cup"
            },
            {
                "name": "egg",
                "quantity": "1"
            },
            {
                "name": "parsley",
                "quantity": "1/4 cup",
                "preparation": "finely chopped"
            },
            {
                "name": "salt",
                "quantity": "1/2 tsp"
            },
            {
                "name": "pepper",
                "quantity": "1/4 tsp"
            },
            {
                "name": "flour",
                "quantity": "1 cup",
                "preparation": "for dusting"
            },
            {
                "name": "oil",
                "quantity": "1/4 cup",
                "preparation": "for frying"
            }
        ],
        "instructions": [
            "In a pan over medium heat, sauté the onion and garlic until softened, about 3-5 minutes.",
            "In a large bowl, mix together the ground meat, sautéedonion and garlic, bread crumbs, milk, egg, parsley, salt, and pepper.",
            "Form the mixture into small patties, about 1/4 inch thick.",
            "Place the flour on a plate, and dust the patties with the flour.",
            "In a pan over medium heat, add the oil and fry the patties for about 3-4 minutes on each side or until browned and cooked through.",
            "Drain the cutlets on a paper towel to remove excess oil.",
            "Serve the cutlets with your favorite sides such as mashed potatoes, vegetables, or rice."
        ],
        "hints": [
            "You can also add some grated cheese, diced mushrooms, or diced vegetables to the meat mixture for added flavor.",
            "You can also marinate the meat with spices or herbs before forming the patties.",
            "You can also bread the cutlets by coating them in flour, egg, and bread crumbs for a crispy texture.",
            "You can also bake the cutlets in the oven at 350F (175C) for 25-30 minutes instead of frying.",
            "You can also serve the cutlets with a sauce such as gravy, ketchup, or mustard."
        ]
    },
    {
        "id": 130,
        "name": "Rice",
        "image": "130_Rice.png",
        "ingredients": [
            {
                "name": "rice",
                "quantity": "2 cups",
                "preparation": "long-grain white rice"
            },
            {
                "name": "water",
                "quantity": "4 cups"
            },
            {
                "name": "salt",
                "quantity": "1/2 tsp"
            },
            {
                "name": "butter",
                "quantity": "1 tbsp",
                "preparation": "optional"
            }
        ],
        "instructions": [
            "Rinse the rice in a fine mesh strainer under cold running water for about 1-2 minutes.",
            "In a medium saucepan, combine the rinsed rice, water, salt and butter (if using).",
            "Bring the mixture to a boil over high heat.",
            "Once boiling, reduce the heat to the lowest setting and cover the pan with a tight-fitting lid.",
            "Simmer for 18-20 minutes, or until the water is absorbed and the rice is tender.",
            "Remove the pan from the heat and let the rice sit, covered, for an additional 5-10 minutes.",
            "Fluff the rice with a fork and serve."
        ],
        "hints": [
            "You can also use brown rice, wild rice or basmati rice instead of white rice.",
            "You can also add some herbs, spices, or vegetables to the rice for added flavor.",
            "You can also replace some of the water with chicken, beef or vegetable stock for added flavor.",
            "You can also add some nuts or dried fruits to the rice for added texture.",
            "You can also make a flavorful rice dish by using sautéed onions, garlic and spices cooked in oil or butter before adding the rice and water."
        ]
    },
    {
        "id": 131,
        "name": "Pureed Mushroom Soup",
        "image": "131_Pureed_mushroom_soup.png",
        "ingredients": [
            {
                "name": "mushrooms",
                "quantity": "1 lb",
                "preparation": "sliced"
            },
            {
                "name": "onion",
                "quantity": "1 medium",
                "preparation": "diced"
            },
            {
                "name": "garlic",
                "quantity": "2 cloves",
                "preparation": "minced"
            },
            {
                "name": "chicken or vegetable broth",
                "quantity": "4 cups"
            },
            {
                "name": "heavy cream",
                "quantity": "1 cup"
            },
            {
                "name": "butter",
                "quantity": "2 tbsp"
            },
            {
                "name": "thyme leaves",
                "quantity": "1 tsp"
            },
            {
                "name": "salt",
                "quantity": "to taste"
            },
            {
                "name": "pepper",
                "quantity": "to taste"
            }
        ],
        "instructions": [
            "In a large pot or Dutch oven, melt the butter over medium heat.",
            "Add the onions and garlic, and sauté until softened, about 5 minutes.",
            "Add the mushrooms and thyme leaves, and cook until the mushrooms have released their liquid and are tender, about 10 minutes.",
            "Pour in the broth and bring to a simmer.",
            "Remove from heat and let it cool slightly.",
            "Use an immersion blender or transfer the mixture to a blender, and blend until the soup is smooth.",
            "Return the soup to the pot and stir in the cream.",
            "Season with salt and pepper to taste.",
            "Reheat the soup over medium heat, until heated through."
        ],
        "hints": [
            "You can use any type of mushrooms you like or have on hand. A mix of different types of mushrooms can add more flavor.",
            "For a vegetarian option, you can use vegetable broth instead of chicken broth.",
            "If you want a thicker soup, you can add 1 tablespoon of flour or cornstarch mixed with 2 tablespoons of cold water to the soup before blending.",
            "For a more elegant presentation, top with a dollop of sour cream and chives before serving.",
            "If you want a more intense flavor, you could add some mushroom stock or dry sherry to the pot after sautéing the onions, garlic and mushrooms."
        ]
    },
    {
        "id": 132,
        "name": "Mac and Cheese",
        "image": "132_Mac_and_cheese.png",
        "ingredients": [
            {
                "name": "macaroni",
                "quantity": "8 oz",
                "preparation": "uncooked"
            },
            {
                "name": "butter",
                "quantity": "2 tbsp"
            },
            {
                "name": "all-purpose flour",
                "quantity": "2 tbsp"
            },
            {
                "name": "milk",
                "quantity": "2 cups"
            },
            {
                "name": "cheddar cheese",
                "quantity": "2 cups",
                "preparation": "shredded"
            },
            {
                "name": "salt",
                "quantity": "1/2 tsp"
            },
            {
                "name": "black pepper",
                "quantity": "1/4 tsp"
            },
            {
                "name": "bread crumbs",
                "quantity": "1/4 cup",
                "preparation": "optional"
            },
            {
                "name": "parsley",
                "quantity": "1/4 cup",
                "preparation": "chopped, optional"
            }
        ],
        "instructions": [
            "Cook the macaroni according to package instructions, and drain.",
            "In a large saucepan, melt the butter over medium heat.",
            "Whisk in the flour and continue cooking for 1-2 minutes, or until the mixture becomes a paste.",
            "Gradually whisk in the milk, and continue cooking until the mixture thickens, about 3-5 minutes.",
            "Remove the saucepan from the heat and stir in the shredded cheddar cheese, salt, and pepper until the cheese is melted and the sauce is smooth.",
            "Add the cooked macaroni to the cheese sauce and stir until well combined.",
            "If desired, top with breadcrumbs and parsley before serving."
        ],
        "hints": [
            "You can also add some diced bacon, diced ham, or diced chicken for added protein.",
            "You can also add some diced vegetables such as broccoli, cauliflower, or bell peppers for added nutrition.",
            "You can also use different types of cheese such as gouda, monterey jack, or mozzarella for added flavor.",
            "You can also add some hot sauce or mustard for added flavor.",
            "You can also bake in the oven at 350F (175C) for 15-20 minutes for a crispy top."
        ]
    }
]

let getItems = () => {

    let ingredients = {}

    let globalNames = []

    let globalRecipes = recipes
    globalRecipes.map((recipe, i) => {

        globalNames.push(globalRecipes[i].name)
        // console.log(globalRecipes[i].name)
        // console.log(globalRecipes[i].ingredients)

        globalRecipes[i].ingredients.map((ingredient, j) => {
            // @ts-ignore

            let ingredientName = globalRecipes[i].ingredients[j].name
            if (!ingredientName) {
                // console.log(globalRecipes[i].ingredients[j])
            }

            let name = globalRecipes[i].ingredients[j].name.toUpperCase()
            if (ingredients[name]) {
                ingredients[name] = 1 + ingredients[name]
            } else {
                ingredients[name] = 1
            }
        })

        // globalRecipes[i].tags = listTags.find(item => item.recipe = globalRecipes[i].name).tags
    })

    console.log(globalRecipes)

    console.log(globalNames)

    // console.log(ingredients)

    // let sortable = [];
    // for (let id in ingredients) {
    //     sortable.push([id, ingredients[id]]);
    // }
    //
    // sortable.sort(function(a, b) {
    //     return b[1] - a[1];
    // });

    // console.dir(ingredients)

}

getItems()

// const fixRecipes = () => {
//
//     let updateRecipe = recipes
//     updateRecipe.map((recipe, i) => {
//
//         let id = i + 1
//
//         // @ts-ignore
//         recipe.id = id
//         let imageName =  recipe.name.replaceAll(' ', '_').toLowerCase()
//         imageName = imageName.charAt(0).toUpperCase() + imageName.slice(1)
//         recipe.image = id + '_' + imageName + '.png'
//
//     })
//
//     console.log(updateRecipe)
// }
//
// fixRecipes()