import { getCustomRepository, getRepository } from 'typeorm';
import AppError from '../errors/AppError';

import TransactionsRepository from '../repositories/TransactionsRepository';
import Transactions from '../models/Transaction';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    // TODO
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const transactionId = await transactionsRepository.findOne(id);

    if (!transactionId) {
      throw new AppError('The transaction does not exist!');
    }

    await transactionsRepository.remove(transactionId);
  }
}

export default DeleteTransactionService;
