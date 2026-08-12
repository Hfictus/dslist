# Ver instruções de execução no README na raiz do DSMovie-Monorepo

import os
import zipfile
from PIL import Image

def converter_e_zipar(pasta_origem, nome_zip_saida):
    imagens_webp = []
    
    # Converte cada imagem para .webp
    for arquivo in os.listdir(pasta_origem):
        if arquivo.lower().endswith(('.png', '.jpg', '.jpeg', '.bmp')):
            caminho_imagem = os.path.join(pasta_origem, arquivo)
            nome_base = os.path.splitext(arquivo)[0]
            caminho_webp = os.path.join(pasta_origem, f"{nome_base}.webp")
            
            with Image.open(caminho_imagem) as img:
                img.save(caminho_webp, 'WEBP', quality=80)
                imagens_webp.append(caminho_webp)
                print(f"Convertida: {arquivo} -> {nome_base}.webp")

    # Compacta em um arquivo .zip
    with zipfile.ZipFile(nome_zip_saida, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for webp in imagens_webp:
            zipf.write(webp, os.path.basename(webp))
            
    print(f"\nSucesso! Arquivo '{nome_zip_saida}' criado com as imagens em .webp.")

# Executa na pasta atual
converter_e_zipar('.', 'imagens_webp.zip')
