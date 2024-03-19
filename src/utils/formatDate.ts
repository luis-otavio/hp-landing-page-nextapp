export const formatDate = (dateString: string): string => {
  // Verifica se dateString é uma string não-nula e não-vazia
  if (!dateString || dateString.trim().length === 0) {
    return 'Data não disponível';
  }

  // Prossegue com a formatação se dateString for válida
  const parts = dateString.split("-");
  if (parts.length === 3) {
    const formattedDateString = `${parts[2]}-${parts[1]}-${parts[0]}`;
    const date = new Date(formattedDateString);

    // Verifica se a data é válida antes de formatar
    if (!isNaN(date.getTime())) {
      return new Intl.DateTimeFormat('pt-BR').format(date);
    } else {
      console.error('Data inválida:', dateString);
      return 'Data inválida';
    }
  }

  console.error('Formato de data inválido:', dateString);
  return 'Formato de data inválido';
}