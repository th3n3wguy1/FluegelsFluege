# POST /api/login

+ Request (application/json; charset=utf-8)

    + Headers

            Cookie: jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdF9uYW1lIjoiYWRtaW4iLCJsYXN0X25hbWUiOiJhZG1pbiIsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGZmLmNvbSIsImlhdCI6MTYzNzQyMjEyMX0.Ua7SpmTa8OC414rSzHZkj7GVndKYNiC_jjKFBqHMTFY

    + Body

            {
                "username": "admin",
                "password": "123456"
            }

+ Response 200 (text/plain; charset=utf-8)

    + Headers

            Etag: W/"2-nOO9QiTIwXgNtWtBJezz8kv3SLc"
            X-Powered-By: Express
            Set-Cookie: jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdF9uYW1lIjoiYWRtaW4iLCJsYXN0X25hbWUiOiJhZG1pbiIsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGZmLmNvbSIsImlhdCI6MTYzNzQyMjEyMX0.Ua7SpmTa8OC414rSzHZkj7GVndKYNiC_jjKFBqHMTFY; Path=/

    + Body

            OK


# POST /api/register

+ Request (application/json; charset=utf-8)

    + Headers

            Cookie: jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdF9uYW1lIjoiYWRtaW4iLCJsYXN0X25hbWUiOiJhZG1pbiIsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGZmLmNvbSIsImlhdCI6MTYzNzQyMjEyMX0.Ua7SpmTa8OC414rSzHZkj7GVndKYNiC_jjKFBqHMTFY

    + Body

            {
                "first_name": "John",
                "last_name": "Doe",
                "username": "jd",
                "email": "john.doe@mail.com",
                "password": "123456",
                "phone": "+4917655455200",
                "credit_card": "4647 8270 5514 1433"
            }

+ Response 201 (text/plain; charset=utf-8)

    + Headers

            Etag: W/"7-rM9AyJuqT6iOan/xHh+AW+7K/T8"
            X-Powered-By: Express
            Set-Cookie: jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdF9uYW1lIjoiSm9obiIsImxhc3RfbmFtZSI6IkRvZSIsInVzZXJuYW1lIjoiamQiLCJlbWFpbCI6ImpvaG4uZG9lQG1haWwuY29tIiwiaWF0IjoxNjM3MzY5MDUwfQ.qmk3WsKEjrorSYBeor81IEBgXLuMQXpo-hkdOkyIfGs; Path=/

    + Body

            Created


# POST /api/user/create

+ Request (application/json; charset=utf-8)

    + Headers

            Cookie: jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdF9uYW1lIjoiYWRtaW4iLCJsYXN0X25hbWUiOiJhZG1pbiIsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGZmLmNvbSIsImlhdCI6MTYzNzQyMjEyMX0.Ua7SpmTa8OC414rSzHZkj7GVndKYNiC_jjKFBqHMTFY

    + Body

            {
                "first_name": "John",
                "last_name": "Doe",
                "username": "jd",
                "email": "john.doe@mail.com",
                "password": "123456",
                "phone": "+4917655455200",
                "credit_card": "4647 8270 5514 1433",
                "admin": "false",
                "test": "123"
            }

+ Response 201 (text/plain; charset=utf-8)

    + Headers

            Etag: W/"7-rM9AyJuqT6iOan/xHh+AW+7K/T8"
            X-Powered-By: Express

    + Body

            Created


# POST /api/user/read

+ Request (application/json; charset=utf-8)

    + Headers

            Cookie: jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdF9uYW1lIjoiYWRtaW4iLCJsYXN0X25hbWUiOiJhZG1pbiIsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGZmLmNvbSIsImlhdCI6MTYzNzQyMjEyMX0.Ua7SpmTa8OC414rSzHZkj7GVndKYNiC_jjKFBqHMTFY

    + Body

            {
                "first_name": "John"
            }

+ Response 200 (application/json; charset=utf-8)

    + Headers

            Etag: W/"10d-0Pg3iPJWCiZzv6E5wK/kVgPYk6A"
            X-Powered-By: Express

    + Body

            {"_id":"619844da969111c870b12780","first_name":"John","last_name":"Doe","username":"jd","email":"john.doe@mail.com","phone":"+4917655455200","credit_card":"4647 8270 5514 1433","password":"8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92","admin":false}


# POST /api/user/update

+ Request (application/json; charset=utf-8)

    + Headers

            Cookie: jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdF9uYW1lIjoiYWRtaW4iLCJsYXN0X25hbWUiOiJhZG1pbiIsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGZmLmNvbSIsImlhdCI6MTYzNzQyMjEyMX0.Ua7SpmTa8OC414rSzHZkj7GVndKYNiC_jjKFBqHMTFY

    + Body

            {
                "find": {
                    "first_name": "John"
                },
                "update": {
                    "admin": "true"
                }
            }

+ Response 200 (text/plain; charset=utf-8)

    + Headers

            Etag: W/"2-nOO9QiTIwXgNtWtBJezz8kv3SLc"
            X-Powered-By: Express

    + Body

            OK


# POST /api/user/delete

+ Request (application/json; charset=utf-8)

    + Headers

            Cookie: jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdF9uYW1lIjoiYWRtaW4iLCJsYXN0X25hbWUiOiJhZG1pbiIsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGZmLmNvbSIsImlhdCI6MTYzNzQyMjEyMX0.Ua7SpmTa8OC414rSzHZkj7GVndKYNiC_jjKFBqHMTFY

    + Body

            {
                "first_name": "John"
            }

+ Response 200 (text/plain; charset=utf-8)

    + Headers

            Etag: W/"2-nOO9QiTIwXgNtWtBJezz8kv3SLc"
            X-Powered-By: Express

    + Body

            OK


# POST /api/flights/create

+ Request (application/json; charset=utf-8)

    + Headers

            Cookie: jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdF9uYW1lIjoiYWRtaW4iLCJsYXN0X25hbWUiOiJhZG1pbiIsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGZmLmNvbSIsImlhdCI6MTYzNzQyMjEyMX0.Ua7SpmTa8OC414rSzHZkj7GVndKYNiC_jjKFBqHMTFY

    + Body

            {
                "origin": "IST",
                "destination": "FRA",
                "time": "2021-11-19T08:00:00Z",
                "seats": "100"
            }

+ Response 201 (text/plain; charset=utf-8)

    + Headers

            Etag: W/"7-rM9AyJuqT6iOan/xHh+AW+7K/T8"
            X-Powered-By: Express

    + Body

            Created


# POST /api/flights/read

+ Request (application/json; charset=utf-8)

    + Headers

            Cookie: jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdF9uYW1lIjoiYWRtaW4iLCJsYXN0X25hbWUiOiJhZG1pbiIsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGZmLmNvbSIsImlhdCI6MTYzNzQyMjEyMX0.Ua7SpmTa8OC414rSzHZkj7GVndKYNiC_jjKFBqHMTFY

    + Body

            {
                "origin": "IST"
            }

+ Response 200 (application/json; charset=utf-8)

    + Headers

            Etag: W/"b6-yuhnlbJV79YYa8tJnfI+6uwpPdM"
            X-Powered-By: Express

    + Body

            {"_id":"61984c41ad02e84474e177ab","origin":"IST","destination":"FRA","time":"2021-11-19T08:00:00Z","seats":"100","passengers":["619844da969111c870b12780","619844da969111c870b12780"]}


# POST /api/flights/update

+ Request (application/json; charset=utf-8)

    + Headers

            Cookie: jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdF9uYW1lIjoiYWRtaW4iLCJsYXN0X25hbWUiOiJhZG1pbiIsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGZmLmNvbSIsImlhdCI6MTYzNzQyMjEyMX0.Ua7SpmTa8OC414rSzHZkj7GVndKYNiC_jjKFBqHMTFY

    + Body

            {
                "find": {
                    "origin": "IST",
                    "destination": "FRA",
                    "time": "10.03.2021 14:30",
                    "seats": "100"
                },
                "update": {
                    "time": "10.03.2021 15.00"
                }
            }

+ Response 200 (text/plain; charset=utf-8)

    + Headers

            Etag: W/"2-nOO9QiTIwXgNtWtBJezz8kv3SLc"
            X-Powered-By: Express

    + Body

            OK


# POST /api/flights/delete

+ Request (application/json; charset=utf-8)

    + Headers

            Cookie: jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdF9uYW1lIjoiYWRtaW4iLCJsYXN0X25hbWUiOiJhZG1pbiIsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGZmLmNvbSIsImlhdCI6MTYzNzQyMjEyMX0.Ua7SpmTa8OC414rSzHZkj7GVndKYNiC_jjKFBqHMTFY

    + Body

            {
                "origin": "IST"
            }

+ Response 200 (text/plain; charset=utf-8)

    + Headers

            Etag: W/"2-nOO9QiTIwXgNtWtBJezz8kv3SLc"
            X-Powered-By: Express

    + Body

            OK


# POST /api/flights/search

+ Request (application/json; charset=utf-8)

    + Headers

            Cookie: jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdF9uYW1lIjoiYWRtaW4iLCJsYXN0X25hbWUiOiJhZG1pbiIsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGZmLmNvbSIsImlhdCI6MTYzNzQyMjEyMX0.Ua7SpmTa8OC414rSzHZkj7GVndKYNiC_jjKFBqHMTFY

    + Body

            {
                "origin": "IST",
                "destination": "FRA"
            }

+ Response 200 (application/json; charset=utf-8)

    + Headers

            Etag: W/"83-9yTMw+/iM1GXS/Hg01KtB6l1TBk"
            X-Powered-By: Express

    + Body

            [{"_id":"6199109bc6af312134f3dea4","origin":"IST","destination":"FRA","time":"2021-11-19T08:00:00Z","seats":"100","passengers":[]}]


# POST /api/flights/book

+ Request (application/json; charset=utf-8)

    + Headers

            Cookie: jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdF9uYW1lIjoiYWRtaW4iLCJsYXN0X25hbWUiOiJhZG1pbiIsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGZmLmNvbSIsImlhdCI6MTYzNzQyMjEyMX0.Ua7SpmTa8OC414rSzHZkj7GVndKYNiC_jjKFBqHMTFY

    + Body

            {
                "origin": "IST"
            }

+ Response 200 (text/plain; charset=utf-8)

    + Headers

            Etag: W/"2-nOO9QiTIwXgNtWtBJezz8kv3SLc"
            X-Powered-By: Express

    + Body

            OK


