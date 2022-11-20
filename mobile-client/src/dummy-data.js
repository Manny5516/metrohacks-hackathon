const image1 = 'data:image/png;base64,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';

const image2 = 'data:image/png;base64,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';

const image3 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAA/CAYAAAC/36X0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA2SSURBVHgB7VtdcFxlGX6+c/bsZnezm91sukmTpk3SllpKSyUFqTMoA+IMiENlvPDKtlfeyKU36gzojaOjoo63jmWQUQdGmGEcgWLFMjjMMEBtAVulbdL/luZv87O/53w+3/edsz/JhvzYSmnyho89OT/fed/n/X/TFWhCUsoUP/Zy3cu1k6sPn146wjXE9YIQ4qlFPUEA9nCNyZuTTnPtnS2zNQuAJ/nxPFcKNyf1cR2gnI83vaouyJVFTwayCx+Affz4LVYefY1x4oUAhNP4dAe/5dI4V7/tW8E+rExq4bqsAuMjWNl0rwJhJ1Y23S5UmMQKJwurtAqColUQsAqCplUQsAqCplUQsAqCphBuaDJ1XLEikS+5mCpVcGmigKGRIiKOwD0DaaRiYb8XXj59ciAo+ci853kYz1fw0VQRFyZKODNawPBYHhcp7OhUmedLyBVczBCEmbKLiiurMsftCrZmbHx5Rw/u39aDjWtisK2lG/d1KZtdClYoe9QctVes4OpkCVcp0JXpIkZ4fGW6jJHpEi7nirg8UUbYsajhIkoVb+5mXhly6iqEWyazLlApQFZKkMkuYGoM0itC8ho6b0U2GcZvvnkHBvsyWAotyRKM8iSKZUlBSlq4sZmSZj5PocdnKpim4OeoyREee8RXCT9NIEbyZdza2Uqz9lAmSPmKi1TERicZbwlZyNEayq6nZhsUjJ/qbepYEphIgucIAn88K6TMR3MTz65DtjWM9piDjkQY75yZoMVUsFRaEIQCN336H0PIuRZsMnFqNI/x6YqOqLZt4Sq1K4REzAlhkgKWykp4ocGoeFIDYAuBAoF6c2gcFQrfn7+Mk6F2uNIIKz1Xm7g2Sp5TIraEBLoSEaxPt6CrrQ2ZeBhtESARFohbZaRjEUTgIptJwuLz7ekU9j3zXhBGri0Iefrh4Q+G8cOHNxOACnpbI3jxeBHHLxcwWShREItLmbINl5oUFCJEUAoEA76QRAVSeLB4GAvbyEci2JiQ6GmPozcdxRpqMxN3+BlBptXR2m2NhGDVBTyPe505exaeS3C5d4jW09oaRzQcguNEqQihF8TSo+SCIAjtAAIOA86WjrB+x93rsvjpq0P4wxsnDfBxmwInyZCNdgqzNhnB2rZW9KYi6Em1UDAKySieioUQpf/HaTX8T+87H8smVNWuWsJCb8+6qrCimbBSP4hrDoI0O2vhzf5Ca8WljzqJdnz/wc3YujauzTYeCc1rjkYkUd3R7ORfm4dxdb5eWDtk640kMGeP2kuuiyUYjdUzVqFJThZnECZTd21ow7p0S42J+UjKmvg+oGKJDEuv9nwgrN6nntll0CIsAdWXVR+ybSRbYryWm3NvM+2eO3cOPT09EHRyJUixUMTk5CRGRkZw7NgxTE1N4aGHHkJnZ+fc9zexEgOgfzBLQcuhRaVI4btBAInQMSKkz6sXP/vccxjo78fWrVtRKpVw8eJFHDp0SAs+Ojqqz3V1dWlhT5w4gdGxUdx55104feoU2tuZJWhZZxn0stlsU+uoilZjwc8kJmX/r4XOokAwr/GMWwgDimCS1AbO+PDO228jFo3iwIED2L59O+LxOAqFghbu+PHjSKfTTKe23qtcLmPX4C70dHdjTUeHBqqtLYWONR2sGIsMrhYujJdwW3ece6tUW0GRWeeND8fw8I7OarPT4AY+l8bPsGRaJAiNpiaFwt8zL+VxJpNBlCDs3LlTm3QsFsOOHTswPj6ORx99FH20kmx2DfIzeZw/fx59fX3aKhzHQZ5gKWH+dbWCX/3tQ2zqjCFk2Syl0/j5X0+hTaVOZpYexh0hZYNVNGYXC/ffkmFWimCptKjA2ACHFA2+qNjYv3+/Pr7vvvt0LzAxMaFdYGBgAK+//jpeefllbPnMFiQTSQ3M0aNHkUwmUeQ9qtZXlpLcsI3HQhdW7I34yT8IbM4gEQ3hLRZZJ69M1wUD+Br3QREmke/qK7OxKvBEEkuJkguCEGbltiEdqZp/DQ8/UfFdL/3lJa35gwcPsogJactQljM4OKg/FRgqIL777rsIh8Po7e1FWyoFJ+xgfGwM2TVZTBOAb93Ti23drZjMuyynHQx0xOAQjSTL60SLpctwSwVXvx4wxRH8zAP8+JVn8N2v7kVvphNLoQVBiDAN7t+9NogIdSSrWHTTv8+cOav9XgmcTCZo6hEt8O7duzWz6tqmTZvgtLSyULLYXHm6lF6fWatjQT5fQndbFEfO5NiPlJl9bLSwGuxMOLi7L2U6Th2afD7E7GywvHiwKBByhWn85ODv8fiDe6vnym4FuzZE0NfZj3TUweCuQUTCEfYZZbgipJsp1VSdHDPmrgLp6ZFpXTaHQxNMlRYS1K5DgC02Pw6125mJEXALd2xIIsyeRAVA4WeD+hpIot4Voa1DV5DVeHGdyuaZcsmg7u+vXjpVPMuXsrVFCseulDHFAKda+WRLCBFbaKZDPEErRgfL5m4GrKhjB/8YANX6kfsqbVclrpKs1ia++/tgCP3MpdwofvTy7/D+xWHs2XEPHrt3D4FbXsJcZLFUM33Fqqrj37s0hBfffxOf79+G7d1pHTvUbSGrWeKSvjM1xhQ/v5irsvqLEcQ3d+GnZa8+O/H416/9iaV6F76ybTcHMKNs2ceBOS57jUDQG3s1/5P+W2wpqiqKs3GSflkcWEyjTlErOUWtJ5B1KU8Gqq5/SJ8KoDLPqW2KHKr8+8p53JIV+Of5k5xFTNPdNlRj9VJpUbMoWWWgbvnaEr7mZF1JNd/96kel0NnX9DlPzj2vWnFpRnC15zymT0tbyB29m3Hn+i344MIQ+hlgl0uLK5ak14hI3YEWzGc6OF/m4GS+WV9wn+fV9tRWEcwdUPP7YP/65/T9XI998RH87NVn9fF3HvgGhy0xzedy+ofFjdd8bQV1vRA161Daev/8KV5XgxSWyjy3ec06pOLJOhOXqAV1P0pI2dhs6TpM6lJZCDlHmPrfXL7rs+tuwdN7v8dMxPRK9zj10QXMFAucXFV0oWZRCWYJLJQxQs1lrqHvsW5Xk5zh4WGsX7/e1xKqPqusoDUS08dt0ThGZ3IapVx+iqO2MjNLkT5c1FOnXGGGmSKFDX4x48laNNTbeTVglJ2UK2XuN4nR6RwuT45jgscjUzl+TnFQm+OMc4w1xZQOihUqKd2a0Gk4XyoyzYZ0bWKpdEv3MRW+aDrGCc0rvO+DLmuCXG4Chw8f1n1ANBqrZTN9nzJtok8X+ODyGbw9fAIP3vY5jtgEUtEExshsT7qDzFm0joQ224qOAR6Zz7FZ+ojF0giFm9DCqqUEHCOYCrQCtaqEamUdkk22c0rVxulVK7pT7Wyy+ig454+JNqRZkrfFErwnra1DWaSj4odrrEHYCggFiK1LckWWb9khV2nBMwFH+n6qQoD2cw4wVX0fbYliY99GP0C5GlFXmucUAHEKpsraB1KD+MLA7ez8ZjQjo1qYKfznyjkKO4LzFPgSBR6l8OPTk3qfsO3w+RYk2Hmmoq3ooBvdurYPaxNpdLS1Uyh2mIkUu9S41q7DpYotpV0VdpRQQvccLKv5Ew45nHeEdM2gNa/cgdektHTpb7KTqWNUEFdnQ8q/1PBSD0XV2MxVozOXLa+rzdGlK3z7S19HVzylkavQMrRFVZSblPDHtw4xFpRxdvSSFnCykOdIvsRnK1p7CTKfjlFLHMK0U8BNA9upxQ50Z7JIUmjlQnGCHGbPYbN7VAMb9WmE5IRbC2kZrXEF2hM68BqlCWHroWyZignrOGBX+wrznG8NMMIHZXfgGqLMubgbRHdZMW5QtQ7jDkWWwzoQcBVomtNsif989A28evwdzhUpaIRajMU5LU5zPJ5BlqbaQTNtIQhhtstGOxSQuGs/DYallq07R+GnPMOvqGqsGojNPK0uMJvA6vrFlGAho7Sv3Mzhu9SfAkRgCaJWn5gpyFwSjOq1OFdNdUGeltr8VYBTlqIQdn1/LtFKSrQgU+NbVQ0ZAVFlQmlU1JXbwmfGxBVfW0qrdW1yUCXWALBmPQdtrVrjfoBV4CreHMc26Vn4epZywVlmSIj6QaVB3Kur2V3P1j6k4or63fFTnuM6iPClYduum0QH1aDxO0DOEiroGeqYEnXt0CzNV1mqWoHwawp6P/9Iq6xGga4UobIA/7Rlfq8XehHD3KYpsr78txhKPY+DDgawIL8btsraDBXypp83xUNQEmufbSismgnun/YDVVAo+cWoPzCpB8kcqxhgwppxH5XGlVt5IWvJE+x5QWgkoQOV7SMTZHIVV6VrfDHo+AJtAY1C1orJRtOsh6YKAuZA1pSU76vRv7IaFXdEsMkyaMl/d6gxHURhc91Cre+fzYoQsw8a95qzNxYmdY/jD2/rzy4HhoVbaa295vW4AqIacQWWxcC1pCCNLpUWtgQdeESTFy7ObP+fZIvrZAmKmgcbAetGQgDLV4iy5KGFbmqGby0E3ji0zJnKEQXCkYXuamoHfiF0I9EyFTOspPg7VjY9r/7hlvr632ncvF8D/DgaokX3M6sINabdj5VJT6j/mRQvxAv8+CVWFv2g6deG6RpPyJVBv/hYeHjDPmm+U3wzkvoO+J7ZMouPAwPm64J9+HR/Y24Ipgx4jespPwY20H8BoBggIHTkaXcAAAAASUVORK5CYII=';

const medicines = [
    {
        name: "Escitalopram Cinfa 10mg",
        available: true,
        image: image1,
    },
    {
        name: "Escitalopram Cinfa 20mg",
        available: true,
        image: image2,
    },
    {
        name: "Escitalopram Kern Pharma 20mg",
        available: false,
        image: image3,
    },
];

export { medicines };
