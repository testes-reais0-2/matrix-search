---
sidebar_position: 2
---

# Imprimindo matrizes

Podemos imprimir os elementos de uma matriz de diversas formas utilizando o laço de repetição `for` e uma lógica com operadores e condicionais sobre os indíces de coluna `j` e linha `i`.

## Todos os elementos

Printando **todos os elementos** da matriz.

```py title="/matrix/print.py"
matriz = [ 
    ["1", "2", "3"], 
    ["4", "5", "6"],
    ["7", "8", "9"],
]

linhas = 3
colunas = 3

for i in range(linhas):
  for j in range(colunas):
    print(f"{matriz[i][j]} ", end="")
  print()
```
```py title="Output"
1 2 3 
4 5 6 
7 8 9 
```

## Diagonal principal

Printando a **diagonal principal** da matriz.

```py title="/matrix/print.py"
matriz = [ 
    ["1", "2", "3"], 
    ["4", "5", "6"],
    ["7", "8", "9"],
]

linhas = 3
colunas = 3

for i in range(linhas):
  for j in range(colunas):
    if j == i:
      print(f"{matriz[i][j]} ", end="")
    else:
      print(f"   ", end="")
  print()
```
```py title="Output"
1       
   5    
      9 
```

:::tip DICA
O que determina se os elementos imprimidos serão acima ou abaixo de uma linha são os sinais de `>` ou de `<`, enquanto o operador de comparação `==` imprime a linha em si.
É possível observar isso na forma como são imprimidos os elementos acima e abaixo da diagonal principal da matriz.
:::

### Acima da diagonal principal

Printando os elementos **acima da diagonal principal** da matriz.

```py title="/matrix/print.py"
matriz = [ 
    ["1", "2", "3"], 
    ["4", "5", "6"],
    ["7", "8", "9"],
]

linhas = 3
colunas = 3

for i in range(linhas):
  for j in range(colunas):
    if j > i:
      print(f"{matriz[i][j]} ", end="")
    else:
      print(f"  ", end="")
  print()
```
```py title="Output"
  2 3 
    6 
      
```

### Abaixo da diagonal principal

Printando os elementos **abaixo da diagonal principal** da matriz.

```py title="/matrix/print.py"
matriz = [ 
    ["1", "2", "3"], 
    ["4", "5", "6"],
    ["7", "8", "9"],
]

linhas = 3
colunas = 3

for i in range(linhas):
  for j in range(colunas):
    if j < i:
      print(f"{matriz[i][j]} ", end="")
    else:
      print(f"  ", end="")
  print()
```
```py title="Output"
      
4     
7 8   
```

## Diagonal secundária

Printando a **diagonal secundária** da matriz.

```py title="/matrix/print.py"
matriz = [ 
    ["1", "2", "3"], 
    ["4", "5", "6"],
    ["7", "8", "9"],
]

linhas = 3
colunas = 3

for i in range(linhas):
  for j in range(colunas):
    if i + j == colunas - 1:
      print(f"{matriz[i][j]} ", end="")
    else:
      rint(f"   ", end="")
  print()
```
```py title="Output"
      3 
   5    
7       
```

## Meio da matriz

Printando os elementos do **meio** da matriz.

```py title="/matrix/print.py"
matriz = [ 
    ["1", "2", "3"], 
    ["4", "5", "6"],
    ["7", "8", "9"],
]

linhas = 3
colunas = 3

for i in range(linhas):
  for j in range(colunas):
    if i == colunas // 2:
      print(f"{matriz[i][j]} ", end="")
    else:
      print(f"   ", end="")
  print()
```
```py title="Output"
         
4 5 6 
         
```

_Alternar o `i` e `j` dentro do `if` para mudar entre horizontal e vertical._

---
:::tip DICA
Caso queira colocar mais de uma condição para imprimir mais padrões da matriz, basta adicionar `or` entre as comparações dentro da condicional `if`.
:::

## Sinal de +

Printando os elementos do **meio da horizontal e vertical**, formando um sinal de + ou cruz.

```py title="/matrix/print.py"
matriz = [ 
    ["1", "2", "3"], 
    ["4", "5", "6"],
    ["7", "8", "9"],
]

linhas = 3
colunas = 3

for i in range(linhas):
  for j in range(colunas):
    if j == colunas // 2 or i == colunas // 2:
      print(f"{matriz[i][j]} ", end="")
    else:
      print(f"  ", end="")
  print()
```
```py title="Output"
  2   
4 5 6 
  8   
```

## Sinal de X

Printando os elementos da **diagonal principal e secundária**, formando um sinal de X.

```py title="/matrix/print.py"
matriz = [ 
    ["1", "2", "3"], 
    ["4", "5", "6"],
    ["7", "8", "9"],
]

linhas = 3
colunas = 3

for i in range(linhas):
  for j in range(colunas):
    if j == i or i + j == colunas - 1:
      print(f"{matriz[i][j]} ", end="")
    else:
      print(f"  ", end="")
  print()
```
```py title="Output"
1   3 
  5   
7   9 
```




