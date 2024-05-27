import Oval1 from './imgs/Oval1.png'
import Oval2 from './imgs/Oval2.png'
import Oval3 from './imgs/Oval3.png'
import Oval4 from './imgs/Oval4.png'
import pl from './imgs/Placeholder.png'
import pl1 from './imgs/Placeholder (1).png'
import pl2 from './imgs/Placeholder (2).png'
import pl3 from './imgs/Placeholder (3).png'
import pl4 from './imgs/Placeholder (4).png'
import pl5 from './imgs/Placeholder (5).png'
export let Data = [
    {
        icon: 'fa-solid fa-chart-pie',
        inside: [
            {
                icon: 'fa-solid fa-universal-access',
                text: 'Sales',
                url: 'main'
            },
            {
                icon: 'fa-solid fa-chart-simple',
                text: 'Market',
                url: 'marketing'
            },
            {
                icon: 'fa-solid fa-comments-dollar',
                text: 'Business Summary',
                url: 'main'
            },
            {
                icon: 'fa-regular fa-floppy-disk',
                text: 'Saved Reports',
                url: 'marketing'
            },
            {
                icon: 'fa-regular fa-comment-dots',
                text: 'Feedbacks',
                url: 'main'
            },
        ]
    },
    {
        icon: 'fa-solid fa-mug-saucer',
        inside: [
            {
                icon: 'fa-solid fa-universal-access',
                text: 'Sales',
                url: 'main'
            },
            {
                icon: 'fa-solid fa-chart-simple',
                text: 'Market',
                url: 'main'
            },
            {
                icon: 'fa-solid fa-comments-dollar',
                text: 'Business Summary',
                url: 'main'
            },
            {
                icon: 'fa-regular fa-floppy-disk',
                text: 'Saved Reports',
                url: 'main'
            },
            {
                icon: 'fa-regular fa-comment-dots',
                text: 'Feedbacks',
                url: 'main'
            },
        ]
    },
    {
        icon: 'fa-solid fa-location-dot',
        inside: [
            {
                icon: 'fa-solid fa-universal-access',
                text: 'Sales',
                url: 'main'
            },
            {
                icon: 'fa-solid fa-chart-simple',
                text: 'Market',
                url: 'main'
            },
            {
                icon: 'fa-solid fa-comments-dollar',
                text: 'Business Summary',
                url: 'main'
            },
            {
                icon: 'fa-regular fa-comment-dots',
                text: 'Feedbacks',
                url: 'main'
            },
        ]
    },
    {
        icon: 'fa-solid fa-calendar-days',
        inside: [
            {
                icon: 'fa-solid fa-comments-dollar',
                text: 'Business Summary',
                url: 'main'
            },
            {
                icon: 'fa-regular fa-floppy-disk',
                text: 'Saved Reports',
                url: 'main'
            },
            {
                icon: 'fa-regular fa-comment-dots',
                text: 'Feedbacks',
                url: 'main'
            },
        ]
    },
    {
        icon: 'fa-solid fa-box',
        inside: [
            {
                icon: 'fa-solid fa-universal-access',
                text: 'Sales',
                url: 'main'
            },
        ]
    },
    {
        icon: 'fa-solid fa-gear',
        inside: [
            {
                icon: 'fa-regular fa-floppy-disk',
                text: 'Saved Reports',
                url: 'main'
            },
            {
                icon: 'fa-regular fa-comment-dots',
                text: 'Feedbacks',
                url: 'main'
            },
        ]
    }
]


export let dateCards = [
    {
        text: 'CoffeeMood',
        earn: '1,536',
        percent: '5',
        color: 'border-violet-500'
    }, {
        text: 'Cozy n chill',
        earn: '2,880',
        percent: '8',
        color: 'border-red-500'
    }, {
        text: "Low 'n slow",
        earn: '9,397',
        percent: '15',
        color: 'border-yellow-500'
    }, {
        text: 'CoffeMilk Zone',
        earn: '0,876',
        percent: '1',
        color: 'border-lime-500'
    }, {
        text: 'Inspiration coffee',
        earn: '6,432',
        percent: '9',
        color: 'border-lime-400'
    },

]
export let topSellingAndGrossingItems = [
    {
        title: 'Top selling items',
        items: [
            {
                img: pl,
                text: 'Tenderloin Salad with Peanut Sauce and Ice Tea',
                money: '$ 2.502,00',
                percentage: '-0,6%',
                color: 'text-orange-600'
            },
            {
                img: pl1,
                text: 'Sirloin Steak Well Done with Special Sauce',
                money: '$ 2.608,00',
                percentage: '+2,8%',
                color: 'text-lime-500'
            },
            {
                img: pl2,
                text: 'Chicken Crispy with Spicy Sambal',
                money: '$ 1.302,00',
                percentage: '-0,7%',
                color: 'text-orange-600'
            }
        ]
    },
    {
        title: 'Top grossing items',
        items: [
            {
                img: pl3,
                text: 'Sirloin Steak Well Done with Special Sauce',
                money: '$ 1.702,00',
                percentage: '+2,8%',
                color: 'text-lime-500'
            },
            {
                img: pl4,
                text: 'Tenderloin Salad with Peanut Sauce and Ice Tea',
                money: '$ 3.308,00',
                percentage: '-0,7%',
                color: 'text-lime-500'
            },
            {
                img: pl5,
                text: 'Chicken Crispy with Spicy Sambal',
                money: '$ 1.602,00',
                percentage: '-0,8%',
                color: 'text-orange-600'
            }
        ]
    }
]
export let dateStaff = [
    {
        name: 'Michelle Nirmala',
        img: Oval1,
        percent: '+4.8%',
        color: 'text-lime-500',
        money: '$1,808'
    },
    {
        name: 'Chad Bernard',
        img: Oval2,
        percent: '-1.2%',
        color: 'text-orange-600',
        money: '$360'
    },
    {
        name: 'Alexandr Chuckleb',
        img: Oval3,
        percent: '+2.8%',
        color: 'text-lime-500',
        money: '$2,024'
    },
    {
        name: 'Pevita Sergichuk',
        img: Oval4,
        percent: '+1.5%',
        color: 'text-lime-500',
        money: '$1,432'
    },
]

export let dataPie = [
    {
        x: 'CoffeeMood',
        y: 685,
    },
    {
        x: 'Cozy n chill',
        y: 878,
    },
    {
        x: "Low 'n slow",
        y: 608,
    },
    {
        x: 'CoffeMilk Zone',
        y: 787,
    },
    {
        x: 'Inspiration coffee',
        y: 368,
    },
]
export let dataColumn = [
    {
        x: 'CoffeeMood',
        y: 675,
        color: '#FF736A'
    },
    {
        x: 'Cozy n chill',
        y: 888,
        color: '#FECF24'
    },
    {
        x: "Low 'n slow",
        y: 678,
        color: '#73CB50'
    },
    {
        x: 'CoffeMilk Zone',
        y: 737,
        color: '#B1E71D'
    },
    {
        x: 'Inspiration coffee',
        y: 369,
        color: '#8569F6'
    },
]


export const dataLine = [[
    { x: ' ', y: 293, color: '#FECF24' },
    { x: 'Mon, 20', y: 337, color: '#FECF24' },
    { x: 'Tue, 21', y: 418, color: '#FECF24' },
    { x: 'Wed, 22', y: 364, color: '#FECF24' },
    { x: 'Thu, 23', y: 342, color: '#FECF24' },
    { x: 'Fri, 24', y: 356, color: '#FECF24' },
    { x: 'Sat, 25', y: 212, color: '#FECF24' },
    { x: 'Sun, 26', y: 404, color: '#FECF24' },
    { x: 'Mon, 27', y: 380, color: '#FECF24' },
    { x: 'Tue, 28', y: 400, color: '#FECF24' },
], [
    { x: ' ', y: 273, color: '#B1E71D' },
    { x: 'Mon, 20', y: 306, color: '#B1E71D' },
    { x: 'Tue, 21', y: 403, color: '#B1E71D' },
    { x: 'Wed, 22', y: 355, color: '#B1E71D' },
    { x: 'Thu, 23', y: 439, color: '#B1E71D' },
    { x: 'Fri, 24', y: 402, color: '#B1E71D' },
    { x: 'Sat, 25', y: 444, color: '#B1E71D' },
    { x: 'Sun, 26', y: 296, color: '#B1E71D' },
    { x: 'Mon, 27', y: 291, color: '#B1E71D' },
    { x: 'Tue, 28', y: 309, color: '#B1E71D' },
], [
    { x: ' ', y: 262, color: '#FF736A' },
    { x: 'Mon, 20', y: 283, color: '#FF736A' },
    { x: 'Tue, 21', y: 291, color: '#FF736A' },
    { x: 'Wed, 22', y: 344, color: '#FF736A' },
    { x: 'Thu, 23', y: 339, color: '#FF736A' },
    { x: 'Fri, 24', y: 312, color: '#FF736A' },
    { x: 'Sat, 25', y: 324, color: '#FF736A' },
    { x: 'Sun, 26', y: 426, color: '#FF736A' },
    { x: 'Mon, 27', y: 412, color: '#FF736A' },
    { x: 'Tue, 28', y: 406, color: '#FF736A' },
], [
    { x: ' ', y: 240, color: '#73CB50' },
    { x: 'Mon, 20', y: 271, color: '#73CB50' },
    { x: 'Tue, 21', y: 282, color: '#73CB50' },
    { x: 'Wed, 22', y: 275, color: '#73CB50' },
    { x: 'Thu, 23', y: 312, color: '#73CB50' },
    { x: 'Fri, 24', y: 298, color: '#73CB50' },
    { x: 'Sat, 25', y: 293, color: '#73CB50' },
    { x: 'Sun, 26', y: 377, color: '#73CB50' },
    { x: 'Mon, 27', y: 432, color: '#73CB50' },
    { x: 'Tue, 28', y: 401, color: '#73CB50' },
], [
    { x: ' ', y: 171, color: '#8569F6' },
    { x: 'Mon, 20', y: 193, color: '#8569F6' },
    { x: 'Tue, 21', y: 242, color: '#8569F6' },
    { x: 'Wed, 22', y: 318, color: '#8569F6' },
    { x: 'Thu, 23', y: 287, color: '#8569F6' },
    { x: 'Fri, 24', y: 292, color: '#8569F6' },
    { x: 'Sat, 25', y: 183, color: '#8569F6' },
    { x: 'Sun, 26', y: 317, color: '#8569F6' },
    { x: 'Mon, 27', y: 385, color: '#8569F6' },
    { x: 'Tue, 28', y: 393, color: '#8569F6' },
],]

export let dataBar = [
    {
        x: '1-2AM',
        hours: 3430,
        color: 'red'
    },
    {
        x: '2-3AM',
        hours: 2630,
        color: 'red'
    },
    {
        x: '3-4AM',
        hours: 1830,
        color: 'red'
    },
    {
        x: '4-5AM',
        hours: 1630,
        color: 'red'
    },
    {
        x: '5-6AM',
        hours: 2530,
        color: 'red'
    },
    {
        x: '6-7AM',
        hours: 1730,
        color: 'red'
    },
    {
        x: '7-8AM',
        hours: 3430,
        color: 'red'
    },
    {
        x: '8-9AM',
        hours: 4440,
        color: 'red'
    },
    {
        x: '9-10AM',
        hours: 1330,
        color: 'red'
    },
    {
        x: '10-11AM',
        hours: 1280,
        color: 'red'
    },
]


export let dateOptions = [
    {
        country: 'China',
        cities: [{
            city: 'Pekin',
        },
        {
            city: 'Shanxay',
        }, {
            city: 'Lanzhou',
        }, {
            city: 'Uxan',
        }
        ]
    }, {
        country: 'Uzbekistan',
        cities: [{
            city: 'Tashkent',
        },
        {
            city: 'Fergana',
        }, {
            city: 'Samarkand',
        }, {
            city: 'Qashqadaryo',
        }
        ]
    }, {
        country: 'England',
        cities: [{
            city: 'London',
        },
        {
            city: 'Tottenham',
        },
        ]
    }, {
        country: 'USA',
        cities: [{
            city: 'Washington',
        },
        {
            city: 'New York',
        }, {
            city: 'Los Angeles',
        },
        {
            city: 'Cansas',
        },
        {
            city: 'Atlanta',
        }
        ]
    }, {
        country: 'Russian',
        cities: [{
            city: 'Moscow',
        },
        ]
    },
]

export let cards = [
    {
        text: 'Total orders',
        icon: 'fa-solid fa-file',
        iconColor: 'text-neutral-500',
        money: '369',
        percent: "5.7%",
        percentColor: 'text-lime-500',
        trend: "fa-solid fa-arrow-up"
    },
    {
        text: 'Total sales',
        icon: 'fa-solid fa-person-rays',
        iconColor: 'text-neutral-500',
        money: '$1,860',
        percent: "3.2%",
        percentColor: 'text-lime-500',
        trend: "fa-solid fa-arrow-up"
    },
    {
        text: 'Net sales',
        icon: 'fa-solid fa-filter-circle-dollar',
        iconColor: 'text-neutral-500',
        money: '$2,970',
        percent: "8.0%",
        percentColor: 'text-lime-500',
        trend: "fa-solid fa-arrow-up"
    },
    {
        text: 'Cancelled orders',
        icon: 'fa-solid fa-circle-xmark',
        iconColor: 'text-orange-600',
        money: '13',
        percent: "1.8%",
        percentColor: 'text-orange-600',
        trend: "fa-solid fa-arrow-down"
    }
]


export let multilocation = [
    {
        country: 'China',
        cities: [{
            city: 'Pekin',
            multilocation: [
                'Kroger', 'Towne Oaks', 'Groveland', 'Groveland Chapels'
            ]
        },
        {
            city: 'Shanxay',
            multilocation: [
                'Deer Creek', 'View details', 'Mayfair', 'Goodfield', 'Carlock', 'Congerville'
            ]
        }, {
            city: 'Lanzhou',
            multilocation: ['Tianshui', 'Baoji']
        },
        {
            city: 'Uxan',
            multilocation: [
                'Eureka', 'Cruger', 'Metamora', 'Roanoke', 'Panola'
            ]
        }
        ]
    }, {
        country: 'Uzbekistan',
        cities: [{
            city: 'Tashkent',
            multilocation: [
                'Sergeli', 'Marsim Gorkiy', 'Yunisobod', 'Mirzo Ulugbek', 'Chilonzor'
            ]
        },
        {
            city: 'Fergana',
            multilocation: [
                'Koson', 'Qoqon', 'Margilan',
            ]
        }, {
            city: 'Samarkand',
            multilocation: ['Samarkand', 'Oltinsoy']
        }, {
            city: 'Surxondaryo',
            multilocation: ['Termiz', 'Denov']
        },
        {
            city: 'Qashqadaryo',
            multilocation: [
                'Qarshi', 'Chirakchi', 'Shaxrisabz', 'Kitob', 'Yakkabog'
            ]
        }
        ]
    }, {
        country: 'England',
        cities: [{
            city: 'London',
            multilocation: [
                'London City', 'Oxford', 'Manchester'
            ]
        },
        {
            city: 'Tottenham',
            multilocation: [
                'Redstone', 'Yellowrock', 'Mayfair 12', 'Goodfield',
            ]
        },
        ]
    }, {
        country: 'USA',
        cities: [{
            city: 'Washington',
            multilocation: [
                'Kroger', 'Towne Oaks', 'Groveland', 'Groveland Chapels'
            ]
        },
        {
            city: 'New York',
            multilocation: [
                'Brockleen Bringe', 'Coma', 'Arezona', 'Mottemham', 'Carlson Street', 'Congerville', 'Phoenix'
            ]
        }, {
            city: 'Los Angeles',
            multilocation: ['Silicon Valley', 'Beach']
        },
        {
            city: 'San Francisco',
            multilocation: [
                'San Jose', 'San Diego', 'Phoenix', 'Colarado', 'Panola'
            ]
        },
        {
            city: 'Cansas',
            multilocation: [
                'Wichita', 'SpringField'
            ]
        },
        {
            city: 'Atlanta',
            multilocation: [
                'New Orlean', 'Bioloxi', 'Orlandp', 'Tampa', 'Panola'
            ]
        }
        ]
    }, {
        country: 'Russian',
        cities: [{
            city: 'Moscow',
            multilocation: [
                'Odintsovo', 'Lesnoy Gorodok', 'Borodki', 'Pykhtino', 'Lyubertsy', 'Khimki', 'Zelenograd'
            ]
        },
        ]
    },
]
export let time = [
    '08:00',
    '10:00',
    '12:00',
    '14:00',
    '16:00',
    '18:00',
    '20:00',
    '22:00'
]