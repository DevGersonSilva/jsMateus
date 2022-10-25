
from msilib.schema import PatchPackage


nome = input('Qual o seu nome: ')
nascimento = input('Informe o ano em que nasceu ')
idade= 2022 - int(nascimento)
cidade = input('Em qual cidade mora atualmente? ')

print ('Seu nome é '+ nome + ', tem ' + str(idade) + ' anos' + ', e atualmente mora em ' + cidade)
