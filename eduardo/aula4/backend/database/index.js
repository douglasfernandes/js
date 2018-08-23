const db1 = [
    {
        "name": "Eduardo",
        "surname": "Araújo",
        "gender": "male",
        "region": "Brazil",
        "age": 24,
        "title": "mr",
        "phone": "(977) 351 2260",
        "birthday": {
            "dmy": "03/04/1994",
            "mdy": "04/03/1994",
            "raw": 765401152
        },
        "email": "eduardo-94@example.com",
        "password": "Araújo94+*",
        "credit_card": {
            "expiration": "2/21",
            "number": "4572-8886-2598-7126",
            "pin": 5238,
            "security": 349
        },
        "photo": "https://uinames.com/api/photos/male/8.jpg"
    },
    {
        "name": "Bruna",
        "surname": "Costa",
        "gender": "female",
        "region": "Brazil",
        "age": 32,
        "title": "mrs",
        "phone": "(509) 636 6799",
        "birthday": {
            "dmy": "21/04/1986",
            "mdy": "04/21/1986",
            "raw": 514485896
        },
        "email": "brunacosta@example.com",
        "password": "Costa86}",
        "credit_card": {
            "expiration": "6/21",
            "number": "9849-4072-5605-1500",
            "pin": 5492,
            "security": 771
        },
        "photo": "https://uinames.com/api/photos/female/24.jpg"
    },
    {
        "name": "Danilo",
        "surname": "Morais",
        "gender": "male",
        "region": "Brazil",
        "age": 29,
        "title": "mr",
        "phone": "(973) 940 9757",
        "birthday": {
            "dmy": "01/06/1989",
            "mdy": "06/01/1989",
            "raw": 612749343
        },
        "email": "danilo89@example.com",
        "password": "Morais89#{",
        "credit_card": {
            "expiration": "9/20",
            "number": "4453-2826-3225-8382",
            "pin": 5213,
            "security": 118
        },
        "photo": "https://uinames.com/api/photos/male/20.jpg"
    },
    {
        "name": "Ryan",
        "surname": "Carvalho",
        "gender": "male",
        "region": "Brazil",
        "age": 36,
        "title": "mr",
        "phone": "(868) 309 4075",
        "birthday": {
            "dmy": "18/08/1982",
            "mdy": "08/18/1982",
            "raw": 398503583
        },
        "email": "ryan_82@example.com",
        "password": "Carvalho82#*",
        "credit_card": {
            "expiration": "6/21",
            "number": "1072-5279-3761-8219",
            "pin": 8643,
            "security": 553
        },
        "photo": "https://uinames.com/api/photos/male/13.jpg"
    },
    {
        "name": "Gustavo",
        "surname": "Gomez",
        "gender": "male",
        "region": "Brazil",
        "age": 30,
        "title": "mr",
        "phone": "(986) 872 8372",
        "birthday": {
            "dmy": "02/04/1988",
            "mdy": "04/02/1988",
            "raw": 575978855
        },
        "email": "gustavo-88@example.com",
        "password": "Gomez88+*",
        "credit_card": {
            "expiration": "11/21",
            "number": "5267-2270-5146-9135",
            "pin": 5463,
            "security": 783
        },
        "photo": "https://uinames.com/api/photos/male/10.jpg"
    },
    {
        "name": "Isabella",
        "surname": "Cavalcante",
        "gender": "female",
        "region": "Brazil",
        "age": 27,
        "title": "ms",
        "phone": "(268) 458 4460",
        "birthday": {
            "dmy": "14/05/1991",
            "mdy": "05/14/1991",
            "raw": 674195079
        },
        "email": "isabella_91@example.com",
        "password": "Cavalcante91$!",
        "credit_card": {
            "expiration": "5/19",
            "number": "3963-5622-2941-3669",
            "pin": 4915,
            "security": 768
        },
        "photo": "https://uinames.com/api/photos/female/23.jpg"
    },
    {
        "name": "Brenda",
        "surname": "Sousa",
        "gender": "female",
        "region": "Brazil",
        "age": 22,
        "title": "ms",
        "phone": "(464) 925 6691",
        "birthday": {
            "dmy": "01/04/1996",
            "mdy": "04/01/1996",
            "raw": 828349146
        },
        "email": "brendasousa@example.com",
        "password": "Sousa96@}",
        "credit_card": {
            "expiration": "6/26",
            "number": "1304-8686-5417-6245",
            "pin": 5835,
            "security": 312
        },
        "photo": "https://uinames.com/api/photos/female/1.jpg"
    },
    {
        "name": "Lavinia",
        "surname": "Schmidt",
        "gender": "female",
        "region": "Brazil",
        "age": 28,
        "title": "ms",
        "phone": "(144) 334 5359",
        "birthday": {
            "dmy": "08/11/1990",
            "mdy": "11/08/1990",
            "raw": 658057299
        },
        "email": "lavinia-90@example.com",
        "password": "Schmidt90^@",
        "credit_card": {
            "expiration": "2/19",
            "number": "5961-6697-7978-8386",
            "pin": 3339,
            "security": 575
        },
        "photo": "https://uinames.com/api/photos/female/20.jpg"
    },
    {
        "name": "Camila",
        "surname": "Mello",
        "gender": "female",
        "region": "Brazil",
        "age": 21,
        "title": "ms",
        "phone": "(782) 654 5901",
        "birthday": {
            "dmy": "26/07/1997",
            "mdy": "07/26/1997",
            "raw": 869936274
        },
        "email": "camila-mello@example.com",
        "password": "Mello97)*",
        "credit_card": {
            "expiration": "10/24",
            "number": "4455-5878-3800-7007",
            "pin": 9407,
            "security": 850
        },
        "photo": "https://uinames.com/api/photos/female/26.jpg"
    },
    {
        "name": "Thiago",
        "surname": "Souza",
        "gender": "male",
        "region": "Brazil",
        "age": 30,
        "title": "mr",
        "phone": "(458) 854 6735",
        "birthday": {
            "dmy": "19/11/1988",
            "mdy": "11/19/1988",
            "raw": 595959668
        },
        "email": "thiagosouza@example.com",
        "password": "Souza88)&",
        "credit_card": {
            "expiration": "11/26",
            "number": "8127-1225-7890-6998",
            "pin": 2683,
            "security": 934
        },
        "photo": "https://uinames.com/api/photos/male/1.jpg"
    },
    {
        "name": "Aline",
        "surname": "Montes",
        "gender": "female",
        "region": "Brazil",
        "age": 24,
        "title": "ms",
        "phone": "(541) 259 9068",
        "birthday": {
            "dmy": "23/03/1994",
            "mdy": "03/23/1994",
            "raw": 764406033
        },
        "email": "aline_montes@example.com",
        "password": "Montes94)&",
        "credit_card": {
            "expiration": "3/21",
            "number": "9362-7539-2752-6482",
            "pin": 8894,
            "security": 534
        },
        "photo": "https://uinames.com/api/photos/female/21.jpg"
    },
    {
        "name": "Brenda",
        "surname": "Dias",
        "gender": "female",
        "region": "Brazil",
        "age": 24,
        "title": "ms",
        "phone": "(830) 397 8184",
        "birthday": {
            "dmy": "28/10/1994",
            "mdy": "10/28/1994",
            "raw": 783318794
        },
        "email": "brenda.dias@example.com",
        "password": "Dias94+",
        "credit_card": {
            "expiration": "5/26",
            "number": "3553-2544-3998-2308",
            "pin": 1646,
            "security": 912
        },
        "photo": "https://uinames.com/api/photos/female/3.jpg"
    },
    {
        "name": "Isabella",
        "surname": "Sousa",
        "gender": "female",
        "region": "Brazil",
        "age": 32,
        "title": "ms",
        "phone": "(744) 327 1956",
        "birthday": {
            "dmy": "24/09/1986",
            "mdy": "09/24/1986",
            "raw": 527949326
        },
        "email": "isabella86@example.com",
        "password": "Sousa86&_",
        "credit_card": {
            "expiration": "7/23",
            "number": "9819-5879-1504-8877",
            "pin": 4361,
            "security": 498
        },
        "photo": "https://uinames.com/api/photos/female/11.jpg"
    },
    {
        "name": "Paulo",
        "surname": "Fernandes",
        "gender": "male",
        "region": "Brazil",
        "age": 26,
        "title": "mr",
        "phone": "(550) 646 6010",
        "birthday": {
            "dmy": "02/04/1992",
            "mdy": "04/02/1992",
            "raw": 702193701
        },
        "email": "paulo_92@example.com",
        "password": "Fernandes92{{",
        "credit_card": {
            "expiration": "9/25",
            "number": "2913-4952-9243-4914",
            "pin": 9608,
            "security": 996
        },
        "photo": "https://uinames.com/api/photos/male/2.jpg"
    },
    {
        "name": "Lavinia",
        "surname": "Montes",
        "gender": "female",
        "region": "Brazil",
        "age": 26,
        "title": "ms",
        "phone": "(181) 348 7861",
        "birthday": {
            "dmy": "05/06/1992",
            "mdy": "06/05/1992",
            "raw": 707773083
        },
        "email": "lavinia_92@example.com",
        "password": "Montes92=",
        "credit_card": {
            "expiration": "3/19",
            "number": "3847-2097-5907-6290",
            "pin": 3594,
            "security": 709
        },
        "photo": "https://uinames.com/api/photos/female/10.jpg"
    },
    {
        "name": "Lara",
        "surname": "Lima",
        "gender": "female",
        "region": "Brazil",
        "age": 31,
        "title": "mrs",
        "phone": "(632) 453 2294",
        "birthday": {
            "dmy": "15/06/1987",
            "mdy": "06/15/1987",
            "raw": 550733930
        },
        "email": "lara_lima@example.com",
        "password": "Lima87{!",
        "credit_card": {
            "expiration": "5/23",
            "number": "1561-4612-2565-5942",
            "pin": 1503,
            "security": 980
        },
        "photo": "https://uinames.com/api/photos/female/15.jpg"
    },
    {
        "name": "Lucas",
        "surname": "Gonçalves",
        "gender": "male",
        "region": "Brazil",
        "age": 35,
        "title": "mr",
        "phone": "(167) 136 1918",
        "birthday": {
            "dmy": "14/05/1983",
            "mdy": "05/14/1983",
            "raw": 421756167
        },
        "email": "lucas_83@example.com",
        "password": "Gonçalves83=@",
        "credit_card": {
            "expiration": "2/25",
            "number": "1321-8546-5808-2330",
            "pin": 3435,
            "security": 814
        },
        "photo": "https://uinames.com/api/photos/male/10.jpg"
    },
    {
        "name": "Enzo",
        "surname": "Correa",
        "gender": "male",
        "region": "Brazil",
        "age": 23,
        "title": "mr",
        "phone": "(854) 229 4020",
        "birthday": {
            "dmy": "27/09/1995",
            "mdy": "09/27/1995",
            "raw": 812253878
        },
        "email": "enzo.correa@example.com",
        "password": "Correa95$#",
        "credit_card": {
            "expiration": "6/20",
            "number": "4434-3494-8095-1497",
            "pin": 7168,
            "security": 685
        },
        "photo": "https://uinames.com/api/photos/male/4.jpg"
    },
    {
        "name": "Emilly",
        "surname": "Cavalcante",
        "gender": "female",
        "region": "Brazil",
        "age": 30,
        "title": "ms",
        "phone": "(983) 888 5118",
        "birthday": {
            "dmy": "13/06/1988",
            "mdy": "06/13/1988",
            "raw": 582241420
        },
        "email": "emilly88@example.com",
        "password": "Cavalcante88&$",
        "credit_card": {
            "expiration": "11/20",
            "number": "6589-5983-3597-5348",
            "pin": 3789,
            "security": 114
        },
        "photo": "https://uinames.com/api/photos/female/21.jpg"
    },
    {
        "name": "Antônio",
        "surname": "Gónzalez",
        "gender": "male",
        "region": "Brazil",
        "age": 32,
        "title": "mr",
        "phone": "(150) 334 4286",
        "birthday": {
            "dmy": "11/01/1986",
            "mdy": "01/11/1986",
            "raw": 505836357
        },
        "email": "antônio86@example.com",
        "password": "Gónzalez86+",
        "credit_card": {
            "expiration": "1/19",
            "number": "5222-3425-7642-7972",
            "pin": 3614,
            "security": 577
        },
        "photo": "https://uinames.com/api/photos/male/14.jpg"
    },
    {
        "name": "Francisca",
        "surname": "Ribeiro",
        "gender": "female",
        "region": "Brazil",
        "age": 24,
        "title": "ms",
        "phone": "(359) 634 7093",
        "birthday": {
            "dmy": "20/06/1994",
            "mdy": "06/20/1994",
            "raw": 772156124
        },
        "email": "francisca-94@example.com",
        "password": "Ribeiro94}~",
        "credit_card": {
            "expiration": "11/25",
            "number": "7863-1258-6972-7856",
            "pin": 4345,
            "security": 841
        },
        "photo": "https://uinames.com/api/photos/female/4.jpg"
    },
    {
        "name": "Rafaela",
        "surname": "Montes",
        "gender": "female",
        "region": "Brazil",
        "age": 22,
        "title": "ms",
        "phone": "(140) 314 4422",
        "birthday": {
            "dmy": "01/04/1996",
            "mdy": "04/01/1996",
            "raw": 828342727
        },
        "email": "rafaela-96@example.com",
        "password": "Montes96%@",
        "credit_card": {
            "expiration": "5/20",
            "number": "7984-5516-7189-1451",
            "pin": 5948,
            "security": 978
        },
        "photo": "https://uinames.com/api/photos/female/15.jpg"
    },
    {
        "name": "Henrique",
        "surname": "Cardoso",
        "gender": "male",
        "region": "Brazil",
        "age": 31,
        "title": "mr",
        "phone": "(506) 536 5201",
        "birthday": {
            "dmy": "14/09/1987",
            "mdy": "09/14/1987",
            "raw": 558658477
        },
        "email": "henrique87@example.com",
        "password": "Cardoso87~^",
        "credit_card": {
            "expiration": "8/20",
            "number": "4855-6684-6774-6190",
            "pin": 5428,
            "security": 943
        },
        "photo": "https://uinames.com/api/photos/male/13.jpg"
    },
    {
        "name": "Eduardo",
        "surname": "Pereira",
        "gender": "male",
        "region": "Brazil",
        "age": 27,
        "title": "mr",
        "phone": "(177) 362 7952",
        "birthday": {
            "dmy": "23/03/1991",
            "mdy": "03/23/1991",
            "raw": 669758602
        },
        "email": "eduardo_91@example.com",
        "password": "Pereira91~$",
        "credit_card": {
            "expiration": "11/22",
            "number": "1958-6965-3602-6576",
            "pin": 6787,
            "security": 659
        },
        "photo": "https://uinames.com/api/photos/male/14.jpg"
    },
    {
        "name": "Gustavo",
        "surname": "Ferreira",
        "gender": "male",
        "region": "Brazil",
        "age": 36,
        "title": "mr",
        "phone": "(920) 212 9754",
        "birthday": {
            "dmy": "08/11/1982",
            "mdy": "11/08/1982",
            "raw": 405582383
        },
        "email": "gustavo_82@example.com",
        "password": "Ferreira82!=",
        "credit_card": {
            "expiration": "8/26",
            "number": "6119-6216-2138-5973",
            "pin": 8301,
            "security": 609
        },
        "photo": "https://uinames.com/api/photos/male/12.jpg"
    }
]

module.exports = db1