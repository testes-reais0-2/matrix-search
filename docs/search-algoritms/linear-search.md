---
sidebar_position: 1
---

# Busca linear

A `busca linear` é um tipo de algoritmo de pesquisa em listas de modo contínuo, isto é, **elemento por elemento**. É um dos mais ineficientes dentre os métodos de busca, visto que o algoritmo checa item por item dentro da lista, levando um tempo muito maior para encontrar o elemento desejado.

```py title="/search-algoritms/linear-search.py"
lista = [0, 4, 5, 8, 10, 30, 2, 14]
numero = 30 # Número a ser encontrado

for i in range(len(lista)): # Percorrendo a lista conforme o tamanho da lista "lista" (número de elementos)
  if lista[i] == numero: # Checa cada número da lista até encontrar o número 30
    print(f"Número encontrado: {lista[i]}")
    break # Encerra o laço caso o número seja encontrado
  elif i == len(lista) - 1: # Caso o indíce do laço for igual ao índice final da lista e o número não tenha sido encontrado, imprime o resultado abaixo
    print("Número não encontrado")
```

_Resultado esperado:_

```py
Número encontrado: 30
```

