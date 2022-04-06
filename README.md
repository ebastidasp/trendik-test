# trendik-test
Set Up de la aplicación:

1. Clonar el repositorio localmente con el comando git clone https://github.com/ebastidasp/trendik-test.git
2. Ir a la rama de master con el comando git checkout master.
3. Ir a la carpeta donde está el backend con el comando cd trendik-test-backend.
4. Instalar las librerías necesarias de node con el comando npm install.
5. Correr el backend con el comando npm start.
6. Si el backend corrió de forma correcta, al abrir un navegador y poner la url localhost:3030?count=10 se debería ver una lista de 10 usuarios generados aleatoriamente con datos sobre su nombre, ubicación, si son influencers o solo seguidores y si son influencers que personas los siguen.
7. Ir al frontend de la aplicación que es la carpeta trendik-test-frontend.
8. Instalar las librerías necesarias de node con el comando npm install.
9. Correr el frontend de la aplicación con el comando npm start.
10. Abrir la aplicación poniendo en el navegador la url localhost:3000. En esa página se debería poder ver la lista de influencers filtrada por tipo de influencer, y 2 barras de búsqueda para poder filtrar también por nombre y la ubicación de sus seguidores.

Log del trabajo:
1. Creación del backend: 2 horas.
2. Creación de la vista principal de la aplicación, sin los botones para filtrar por tipo de influencer: 2 horas.
3. Creación de los archivos de lista y lista de seguidores: 3 horas.
4. Creación del grupo de botones con los tipos de influencer: 1 hora.

Mejoras:
1. Añadir una base de datos.
2. Mejorar la forma en que se despliegan los seguidores de un influencer.
3. Utilizar cards para mostrar la información de cada influencer y seguidor.
4. Hacer más eficiente las peticiones en caso de que se tengan millones de usuarios.

Nota:
Dependiendo de la ubicación que se ingrese, se muestran los seguidores que sean de esa ubicación o que tengan al menos un seguidor de ese lugar.
