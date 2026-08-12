# Executar no terminal dentro da pasta das imagens para mudar o nome de todos os arquivos
# mapeia cada arquivo a partir de uma ordem 1.webp, 2.webp...

import os

# Mapeamento do número do arquivo original para o novo nome de destino
rename_map = {
    "1.webp": "dslist-Mass_Effect_Trilogy.webp",
    "2.webp": "dslist-Red_Dead_Redemption_2.webp",
    "3.webp": "dslist-The_Witcher_3-_Wild_Hunt.webp",
    "4.webp": "dslist-Sekiro-_Shadows_Die_Twice.webp",
    "5.webp": "dslist-Ghost_of_Tsushima.webp",
    "6.webp": "dslist-Super_Mario_World.webp",
    "7.webp": "dslist-Hollow_Knight.webp",
    "8.webp": "dslist-Ori_and_the_Blind_Forest.webp",
    "9.webp": "dslist-Cuphead.webp",
    "10.webp": "dslist-Sonic_CD.webp",
}

def rename_images():
    renamed_count = 0
    for old_name, new_name in rename_map.items():
        if os.path.exists(old_name):
            os.rename(old_name, new_name)
            print(f"Renomeado: {old_name} -> {new_name}")
            renamed_count += 1
        else:
            print(f"Aviso: Arquivo '{old_name}' não foi encontrado.")
            
    print(f"\nConcluído! Total de arquivos renomeados: {renamed_count}")

if __name__ == "__main__":
    rename_images()

# Como executar:
# Criar um arquivo chamado renomear.py dentro da pasta onde estão as imagens (1.webp, 2.webp, ...).
# Colar o código acima dentro dele e salvar.
# Abrir o terminal nessa pasta e executar: python renomear.py
