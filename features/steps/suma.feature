Feature: Suma de dos enteros

Scenario: Cuando un usuario ingrese 2 numeros enteros
    Given Una Calcuadora
    When Se ingresa 6 y 4
    Then El resultado debe ser 10

Scenario: Cuando un usuario ingrese 2 numeros enteros negativos
    Given Una Calcuadora
    When Se ingresa -6 y -4
    Then El resultado debe ser -10    

