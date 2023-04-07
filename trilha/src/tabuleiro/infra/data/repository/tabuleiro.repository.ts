import { Injectable } from '@nestjs/common';
import { Tabuleiro } from 'src/tabuleiro/domain/models/tabuleiro.model';
import { Logger } from 'nestjs-pino';
import { MongooseBaseRepository } from '@gabriel.cora/eng.soft.jogo.da.trilha.core';
import { Span } from 'nestjs-otel';

@Injectable()
export class TabuleiroRepository {
  constructor(
    private readonly repositoryBase: MongooseBaseRepository<Tabuleiro>,
    private readonly _logger: Logger,
  ) { }

  @Span()
  public async insereTabuleiro(tabuleiro: Tabuleiro) {
    try {
      this._logger.log("executing repository method")

      const tabuleiroInserido = new Tabuleiro(await this.repositoryBase.insertOne(tabuleiro))

      await tabuleiroInserido.registraTabuleiro()

      return tabuleiroInserido
    } catch (exception) {
      this._logger.error("error on repository method")
      throw exception
    }
  }
  @Span()
  public async deletaTabuleiro(tabuleiro: Tabuleiro) {
    try {
      this._logger.log("executing repository method")

      // const tabuleiroDeletado = new Tabuleiro(await this.repositoryBase.deleteOne(tabuleiro))

      const tabuleiroDeletado = tabuleiro

      await tabuleiroDeletado.deletaTabuleiro()

      return tabuleiroDeletado
    } catch (exception) {
      this._logger.error("error on repository method")
      throw exception
    }
  }

  @Span()
  public async atualizaTabuleiro(tabuleiro: Tabuleiro) {
    try {
      this._logger.log("executing repository method")

      const tabuleiroAtualizada = new Tabuleiro(await this.repositoryBase.updateOne(tabuleiro))

      await tabuleiroAtualizada.atualizaTabuleiro()

      return tabuleiroAtualizada
    } catch (exception) {
      this._logger.error("error on repository method")
      throw exception
    }
  }

  @Span()
  public async consultaTabuleiroAtual() {
    try {
      this._logger.log("executing repository method")

      const tabuleiroAtual = await this.repositoryBase.findOne({}, { timeStamp: "desc" })

      if (tabuleiroAtual)
        return new Tabuleiro(tabuleiroAtual)
    } catch (exception) {
      this._logger.error("error on repository method")
      throw exception
    }
  }
}
