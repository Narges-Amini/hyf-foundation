Step Adding a recipe Viewing a recipe Editing a recipe

1. User → Frontend Clicks “Add a new recipe” Selects “SP recipe” Changes “SP recipe”
2. Frontend → Backend POST /api/recipes GET /api/recipes/52 PUT /api/recipes/42
3. Request body JSON with new recipe details None JSON with updated recipe details
4. Backend → Database Save new recipe Find recipe with ID 52 Update recipe
5. Database → Backend Confirm saved, ID = 42 Return recipe details Confirm updated, ID = 42
6. Backend → Frontend 201 Created + JSON 200 OK + JSON 200 OK + updated JSON
7. Frontend → User Displays new recipe Displays “SP recipe” Displays updated recipe
   HTTP method POST GET PUT
   URL /api/recipes /api/recipes/52 /api/recipes/42
   Content-Type application/json Usually not needed application/json
   Data travels in Request body URL Request body

// POST adds
//GET retrieves
//PUT updates.
//Content-Type: application/json tells the server how to read the request body.
//GET has no body.
