package com.devsuperior.dslist.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dslist.dto.GameListDTO;
import com.devsuperior.dslist.entities.GameList;
import com.devsuperior.dslist.projections.GameMinProjection;
import com.devsuperior.dslist.repositories.GameListRepository;
import com.devsuperior.dslist.repositories.GameRepository;

@Service
public class GameListService {

	@Autowired
	private GameListRepository gameListRepository;
	
	@Autowired
	private GameRepository gameRepository;
	
	
	
	@Transactional(readOnly = true)
	public List<GameListDTO> findAll() {
		List<GameList> result = gameListRepository.findAll();
		return result.stream().map(x -> new GameListDTO(x)).toList();
	}
	
	/** Trocar um jogo de lugar, atualizando a posição dos demais na lista:
	 * Reordena a lista de jogos deslocando os elementos.
	 * Remove o jogo da posição de origem e o insere na posição de destino,
	 * atualizando a posição de todos os jogos intermediários no banco de dados.
	 * */
	@Transactional
	public void move(Long listId, int sourceIndex, int destinationIndex) {
		List<GameMinProjection> list = gameRepository.searchByList(listId);
		
		GameMinProjection obj = list.remove(sourceIndex);
		list.add(destinationIndex, obj);
		
		int min = (sourceIndex < destinationIndex)?sourceIndex:destinationIndex;
		int max = (sourceIndex < destinationIndex)?destinationIndex:sourceIndex;
		
		for(int i = min; i <= max; i++) {
			gameListRepository.updateBelongingPosition(listId, list.get(i).getId(), i);
		}
	}
	

/* Troca dois jogos de lugar, sem atualizar a posição dos demais da lista:
 * Realiza a troca direta de posições entre dois jogos da lista.
 * Inverte apenas os valores de posição do jogo de origem e do jogo de destino no banco de dados,
 * mantendo inalterada a ordem de todos os outros jogos.
	@Transactional
	public void move(Long listId, int sourceIndex, int destinationIndex) {
		List<GameMinProjection> list = gameRepository.searchByList(listId);
		
		// Pega os dois objetos diretamente pelos seus índices
		GameMinProjection sourceObj = list.get(sourceIndex);
		GameMinProjection destObj = list.get(destinationIndex);
		
		// Inverte as posições apenas desses dois jogos no banco de dados
		gameListRepository.updateBelongingPosition(listId, sourceObj.getId(), destinationIndex);
		gameListRepository.updateBelongingPosition(listId, destObj.getId(), sourceIndex);
	}
*/
	
}

