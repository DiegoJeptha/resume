# Resume

A template for my resume and cover letter that can converted to a PDF and distributed.

Written using angular 4, following solid layout and design practices. 

## Config
The various sections of the resume and conver letter can be configured through json files found in the assets directory

### about-me.json
```javascript
{
    "summary": "",
    "interests": ""
}
```

### contact.json
```javascript
{
    "name": "",
    "address": {
        "addr1": "",
        "addr2": "",
        "postal": "",
        "city": "",
        "province": "",
        "contry": ""
    },
    "phone": {
        "main": "",
        "alternate": ""
    },
    "digital": {
        "email": "",
        "github": "",
        "website": ""
    }
}
```

### education.json
```javascript
[
  {
    "school": "",
    "course": "",
    "graduationYear": "",
    "summary": ""
  },
  {
    "school": "",
    "course": "",
    "graduationYear": "",
    "summary": ""
  },
  {
    "school": "",
    "course": "",
    "graduationYear": "",
    "summary": ""
  }
]
```

### skill-list.json
```javascript
{
  "skillText": "",
  "skills": [
    {
      "title": "",
      "items": [
        ""
      ]
    }
  ]
}
```

### work-history.json
```javascript
[
  {
    "company": "",
    "title": "",
    "location": "",
    "dateRange": "",
    "text": "",
    "accomplishments": ""
  }
]
```

## Launching 
`clone repo: git@github.com:wildpyro/resume.git / https://github.com/wildpyro/resume.git`    
`npm install`  
`ng serve`  