# Node-ts-multiplication-app

instrucciones para correr y ejecutar nuestro programa

1. Instalar las dependencies

```
npm install
```

2. Correr el script

revisar las banderas necesarias que se deben enviar

las banderas obligatorias son:

## -b:base esto es para la base de la tabla
## -l:limit esto es para el limite de la multiplicación de la tabla
## -d:destination esto es para la base de la tabla
## -n:name esto es para el nombre del archivo que se generó
## -s:show si se envia esta bandera, se guarda y se muestra por consola la tabla 

# Ejemplo: para correr el archivo podemos ejecutar el siguiente comando
```
npx ts-node src/app.ts -b 8 -l 9 -d "outputs/table-8" -n "new-table"
```