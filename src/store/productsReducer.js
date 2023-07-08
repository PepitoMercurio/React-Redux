export const ADD_PRODUCT_ACTION = 'ADD_PRODUCT_ACTION';
export const UPDATE_PRODUCT_ACTION = 'UPDATE_PRODUCT_ACTION';
export const DELETE_PRODUCT_ACTION = 'DELETE_PRODUCT_ACTION';

let id = 10

const initialState = [
    {
        id: 1,
        Name: 'Pommes de terre',
        Price: 2.50,
        Description : 'Les pommes de terre sont des légumes-racines riches en amidon et en nutriments essentiels. Elles peuvent être cuites de différentes façons et constituent un aliment de base dans de nombreux plats à travers le monde.',
        Quantity: 75000,
        Image: 'https://img-3.journaldesfemmes.fr/ZfmzxO5Kyg0e3j1URh4V8Mf3slc=/1500x/smart/097777a79f144a048f7008573f8584d5/ccmcms-jdf/27424516.jpg'
    },
    {
        id: 2,
        Name: 'Brocoli',
        Price: 4.99,
        Description : 'Le brocoli est un légume vert crucifère riche en vitamines et en minéraux. Il est souvent consommé cuit à la vapeur ou sauté à la poêle avec d\'autres légumes.',
        Quantity: 30000,
        Image: 'https://img.cuisineaz.com/1200x675/2018/07/03/i140773-brocoli.jpeg'
    },
    {
        id: 3,
        Name: 'Carottes',
        Price: 1.99,
        Description : 'Les carottes sont des légumes-racines orange riches en vitamine A et en fibres. Elles sont souvent consommées crues en salade ou cuites dans des plats comme les ragoûts et les soupes.',
        Quantity: 50000,
        Image: 'https://img.passeportsante.net/1200x675/2021-05-03/i101995-carotte-nu.webp'
    },
    {
        id: 4,
        Name: 'Poivrons',
        Price: 3.75,
        Description : 'Les poivrons sont des légumes colorés et croquants riches en vitamines et en antioxydants. Ils sont souvent utilisés dans les salades, les plats sautés et les soupes.',
        Quantity: 25000,
        Image: 'https://img-3.journaldesfemmes.fr/aqa1G_K5A_AJCP5YwsclgPZBjBI=/1500x/smart/9950d732110846059fcd97cb23524180/ccmcms-jdf/25044854.jpg'
    },
    {
        id: 5,
        Name: 'Courgettes',
        Price: 2.25,
        Description : 'Les courgettes sont des légumes verts tendres et peu caloriques. Elles peuvent être consommées crues ou cuites dans des plats comme les gratins et les ragoûts.',
        Quantity: 40000,
        Image: 'https://res.cloudinary.com/hv9ssmzrz/image/fetch/c_fill,f_auto,h_488,q_auto,w_650/https://images-ca-1-0-1-eu.s3-eu-west-1.amazonaws.com/photos/original/741/produit-courgettes-AdobeStock_86727844.jpg'
    },
    {
        id: 6,
        Name: 'Chou-fleur',
        Price: 3.50,
        Description : 'Le chou-fleur est un légume crucifère blanc qui peut être consommé cru ou cuit. Il est riche en vitamine C et en fibres, et peut être utilisé dans des plats comme le riz de chou-fleur et les soupes.',
        Quantity: 20000,
        Image: 'https://img.passeportsante.net/1200x675/2021-05-03/i102007-chou-fleur-nu.jpg'
    },
    {
        id: 7,
        Name: 'Aubergines',
        Price: 2.99,
        Description : 'Les aubergines sont des légumes violets ou blancs en forme d\'oeuf, souvent utilisés dans la cuisine méditerranéenne. Elles sont riches en antioxydants et en fibres, et peuvent être grillées, rôties ou frites.',
        Quantity: 35000,
        Image: 'https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Bowl-of-aubergines-5370e43.jpg'
    },
    {
        id: 8,
        Name: 'Salade',
        Price: 1.75,
        Description : 'La salade est un mélange de légumes verts crus souvent utilisé comme accompagnement ou ingrédient de base pour les salades. Elle est riche en vitamines et en minéraux, et peut être agrémentée de diverses garnitures et vinaigrettes.',
        Quantity: 40000,
        Image: 'https://img.passeportsante.net/1200x675/2021-05-03/i102075-laitue-nu.webp'
    },
    {
        id: 9,
        Name: 'Oignons',
        Price: 1.50,
        Description : 'Les oignons sont des légumes-racines utilisés dans la plupart des cuisines du monde. Ils sont riches en antioxydants et en nutriments essentiels, et peuvent être utilisés crus ou cuits dans une variété de plats.',
        Quantity: 45000,
        Image: 'https://www.gammvert.fr/conseils/sites/default/files/2020-07/Fotolia_71659175_M.jpg'
    },
    {
        id: 10,
        Name: 'Champignons',
        Price: 3.25,
        Description : 'Les champignons sont des légumes-fongiques riches en protéines et en nutriments essentiels. Ils sont souvent utilisés dans les plats sautés, les omelettes et les soupes, et sont disponibles dans une variété de variétés et de tailles.',
        Quantity: 30000,
        Image: 'https://www.modesettravaux.fr/wp-content/uploads/modesettravaux/2022/10/shutterstock_1644427417-675x410.jpg'
    }
]

export function productsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT_ACTION: 
            return [...state, {id: ++id, ...action.payload }]
        case UPDATE_PRODUCT_ACTION:
            return state.map(elem => {
                if (elem.id === action.payload.id) {
                    return {...elem, ...action.payload}
                } else {
                    return elem
                }
            })
        case DELETE_PRODUCT_ACTION:
            return state.filter(elem => elem.id !== action.payload.id)
        default:
          return state
    }
}