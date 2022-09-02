class Producto {
  constructor(codigo, nombre, cantidad, precio) {
      this.codigo = codigo;
      this.nombre = nombre;
      this.cantidad = cantidad;
      this.precio = precio;
      this.hijoizquierdo = null;
      this.hijoderecho = null;
  }
}


class ArbolBinario {
  constructor() {
      this.raiz = null;
  }

  agregar(nuevo) {
      if (this.raiz == null)
          this.raiz = nuevo;
      else
          this.agregate(nuevo, this.raiz);
  }

  agregate(nuevo, nodox) {
      if (nuevo.codigo < nodox.codigo)
          if (nodox.hijoizquierdo == null)
              nodox.hijoizquierdo = nuevo;
          else
              this.agregate(nuevo, nodox.hijoizquierdo);

      else
      if (nodox.hijoderecho == null)
          nodox.hijoderecho = nuevo;
      else
          this.agregate(nuevo, nodox.hijoderecho);
  }
  inOrder() {
      if (this.raiz == null)
          return "";
      else
          return this.inOrderRec(this.raiz);
  }
  inOrderRec(nodox) {
      let info = "";
      if (nodox.hijoizquierdo != null)
          info += this.inOrderRec(nodox.hijoizquierdo);
      info += 'Codigo de Producto: ' + nodox.codigo + "<br>";
      if (nodox.hijoderecho != null)
          info += this.inOrderRec(nodox.hijoderecho);
      return info;
  }
  PreOrder() {
      if (this.raiz == null) {
          return "";
      } else
          return this.PreOrderRec(this.raiz);
  }

  PreOrderRec(nodox) {
      let info = nodox.codigo;
      if (nodox.hijoizquierdo != null) {
          info += "-" + this.PreOrderRec(nodox.hijoizquierdo);
      }
      if (nodox.hijoderecho != null) {
          info += "-" + this.PreOrderRec(nodox.hijoderecho);
      }
      return info;
  }
  PosOrder() {
      if (this.raiz == null) {
          return "";
      } else {
          return this.PosOrderRec(this.raiz);
      }
  }

  PosOrderRec(nodox) {
      let info = "";
      if (nodox.hijoizquierdo != null) {
          info += this.PosOrderRec(nodox.hijoizquierdo) + "-";
      }
      if (nodox.hijoderecho != null) {
          info += this.PosOrderRec(nodox.hijoderecho) + "-";
      }
      info += nodox.codigo;
      return info;
  }
  Buscar(codigo, nodox = this.raiz) {
      while (nodox != null) {
          if (nodox.codigo === codigo)
              return nodox;

          if (codigo < nodox.codigo) {
              return this.Buscar(codigo, nodox = nodox.hijoizquierdo)
          }
          if (codigo > nodox.codigo) {
              return this.Buscar(codigo, nodox = nodox.hijoderecho)
          }
      }
      return null;
  }
}



let arbol = new ArbolBinario();
const BtnAgr = document.getElementById('BtnAgr');
BtnAgr.addEventListener('click', () => {
  let codigo = Number(document.getElementById('Cod').value);
  let nombre = document.getElementById('Nom').value;
  let precio = document.getElementById('Pre').value;
  let cantidad = document.getElementById('Can').value;

  let nuevo = new Producto(codigo, nombre, cantidad, precio);
  arbol.agregar(nuevo);
  console.log(arbol);
  let detalles = document.getElementById('detalles');
  detalles.innerHTML += '<p>Se agrego el producto ' + codigo + '</p>';

  document.getElementById('Cod').value = '';
  document.getElementById('Can').value = '';
  document.getElementById('Pre').value = '';
  document.getElementById('Nom').value = '';

});
const BtnListInOrder = document.getElementById('BtnListInOrder');
BtnListInOrder.addEventListener('click', () => {
  let detalles = document.getElementById('arbol');
  arbol.inOrder();
  detalles.innerHTML += arbol.inOrder();
});
const BtnListPreOrder = document.getElementById('BtnListPreOrder');
BtnListPreOrder.addEventListener('click', () => {
  let detalles = document.getElementById('arbol');
  arbol.PreOrder();
  detalles.innerHTML += arbol.PreOrder() + '<br>';
});
const BtnListPosOrder = document.getElementById('BtnListPosOrder');
BtnListPosOrder.addEventListener('click', () => {
  let detalles = document.getElementById('arbol');
  arbol.PosOrder();
  detalles.innerHTML += arbol.PosOrder() + '<br>';
});
const BtnFind = document.getElementById('BtnFind');
BtnFind.addEventListener('click', () => {
  let codigo = Number(document.getElementById('Cod').value);
  let detalles = document.getElementById('arbol');
  let buscado = arbol.Buscar(codigo);
  if (buscado == null) {
      detalles.innerHTML += 'No se encontro el buscado' + '<br>' + '<br>';
  } else {
      detalles.innerHTML += 'Se encontro el buscado con codigo: ' + codigo + '<br>' + 'INFO:' + '<br>' + 'Nombre:' + buscado.nombre + '<br>' +
          'Cantidad: ' + buscado.cantidad + '<br>' + 'Precio: ' + buscado.precio + '<br>' + '<br>';
  }

  const BtnLimpiar = document.getElementById('BtnLimpiar');
  BtnLimpiar.addEventListener('click', () =>{
    detalles = "";
  }) 



});