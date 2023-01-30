# FUTAPP

## PUT /fields/2

-   {
    "name": "campão!"
    }

---

## DELETE /fields/3
* Field 3 has been deleted.
---

## POST /fields

-   {
    "place_id": 3,
    "name": "campo gigantesco monstruoso 10.000m²",
    "type_id": 3
    }

---

## GET /FIELDS

* [{
place_id: 1,
name: 'campinho',
type_id: 2
},
{
place_id: 1,
name: 'campâo',
type_id: 1
},
{
place_id: 2,
name: 'campo',
type_id: 2
},
{
place_id: 3,
name: 'quadra',
type_id: 3
}]
-------
GET /health
-
* OK!