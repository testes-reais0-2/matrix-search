---
sidebar_position: 2
---

# Busca binária

A `busca binária` é o mais eficiente algoritmo para encontrar um item em uma lista de itens. Ela funciona dividindo repetidamente pela **metade** a porção da lista que deve conter o elemento, até reduzir as localizações possíveis a apenas **uma**.

_ps: A lista em questão deve estar `ordenada` para funcionar de forma correta._

```py title="/search-algoritms/binary-search.py"
lista = [0, 4, 5, 8, 10, 30, 2, 14]
lista.sort() # Ordenando a lista com o método sort()

ini = 0 # Definir qual será o índice inicial
fim = len(lista) - 1 # Definir o índice final
numero = 30 # Número a ser encontrado

while ini <= fim:
  meio = (ini + fim) // 2 # Calculando o número que está no meio da lista
  if lista[meio] == numero: # Caso o item que esteja na posição lista[meio] for o número desejado, irá parar o laço com o break
    print(f"Número encontrado.")
    break
  # Checando se o número a ser encontrado é maior ou menor que o elemento que está no meio da lista para poder dividir para o fim ou início
  elif lista[meio] < numero:
    ini = meio + 1
  elif lista[meio] > numero:
    fim = meio - 1
```

_Resultado esperado:_

```
Número encontrado.
```