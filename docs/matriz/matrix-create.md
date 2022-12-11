---
sidebar_position: 1
---

# Declarando e criando

## Declarando matrizes manualmente

A declaração de matrizes se dá por uma forma bem simples em `Python`. Basta criar uma `variável` que armazene uma lista contendo outras listas com elementos dentro dela:

```py title="/matrix/create.py"
matriz = [ 
    ["1", "2", "3"], 
    ["4", "5", "6"],
    ["7", "8", "9"],
]
```
_ps: Note que há linhas e colunas que irão nos permitir acessar os dados dentro da matriz._

A primeira lista sempre deverá conter mais de uma lista dentro dela, do contrário será um vetor e não uma matriz. Por exemplo: `["1", "2", "3, "4", "5", "6", "7", "8", "9"]`.

### 

## Acessando os dados da matriz

Podemos acessar os dados dentro de uma matriz por meio do índice de sua linha e o índice de sua coluna. Eles são, respectivamente, a posição da lista _(da qual ele pertence)_ dentro da matriz _(lista principal)_ e a posição que o ele está dentro de sua própria lista:

```py title="/matrix/dataAccess.py"
matriz = [ # Lista principal
      # COLUNAS:
    # 0  # 1  # 2
    ["1", "2", "3"], # Lista de índice 0 (linha)
    ["4", "5", "6"], # Lista de índice 1 (linha)
    ["7", "8", "9"], # Lista de índice 2 (linha)
]

# Está acessando primeiro a lista de índice 2 (["7", "8", "9"]) dentro da lista principal - 3ª linha.
# Logo depois ele procura o número que está no índice 1 dentro da lista acessada - 2ª coluna.
number_8 = matriz[2][1]
print(number_8) # retorno: 8
```

:::tip DICA
Em laços de repetição, essas posições são representadas geralmente da seguinte forma:
- Índice da linha → `i`
- Índice da coluna → `j`
:::

## Automatizando a criação de matrizes

- Primeiro devemos delimitar o número de linhas e colunas que vamos ter em nossa matriz em duas variáveis
- Depois declaramos uma variável que contenha uma lista vazia `[]` na qual será adicionado as linhas
- Por fim será feito um laço de repetição `for` dentro de outro, adicionando as colunas nas linhas e as linhas na matriz a cada iteração

```py title="/matrix/auto_create.py"
linhas = 5
colunas = 5
matriz = []

for i in range(linhas):
    linha = []
    for j in range(colunas):
        num = int(input("Digite um número: "))
        linha.append(num)
    matriz.append(linha)

print(matriz)
```

_Após o usuário informar os números desejados, um resultado parecido será retornado:_

```py 
[[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]
```

### Utilizando a bibliotéca `random`

Essa biblioteca nos permite criar matrizes com números aleatórios de forma automática.

```py title="/matrix/random_create.py"
import random

lin = 3
col = 3
matriz = []

for i in range(lin):
    linha = []
    for j in range(col):
        # Irá gerar números aleatórios de 1 até 9.
        num = random.randint(1, 9)
        linha.append(num)
    matriz.append(linha)

print(matriz)
```

_Depois de gerar todos os números, um resultado parecido será obtido:_

```py
[[3, 7, 6], [7, 8, 9], [9, 4, 5]]
```
