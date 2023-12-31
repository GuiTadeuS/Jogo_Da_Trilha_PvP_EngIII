import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { RegistraTabuleiroCommand } from 'src/tabuleiro/domain/commands/impl/registra-tabuleiro.command';
import { TabuleiroDto } from '../dto/tabuleiro.dto';
import { Logger } from 'nestjs-pino';
import { Span } from 'nestjs-otel';
import { AtualizaTabuleiroCommand } from '../../domain/commands/impl/atualiza-tabuleiro.command';
import { DeletaTabuleiroCommand } from 'src/tabuleiro/domain/commands/impl/deleta-tabuleiro.command';
import { BuscaTabuleirosQuery } from 'src/tabuleiro/domain/queries/impl/busca-tabuleiros.query';
import { BuscaTabuleiroPorIdQuery } from 'src/tabuleiro/domain/queries/impl/busca-tabuleiro-por-id.query';

@Injectable()
export class TabuleiroService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
    private readonly _logger: Logger,
  ) { }

  @Span()
  async buscaTabuleiroPorId(id: string) {
    this._logger.log('starting service execution');

    return await this.queryBus.execute(new BuscaTabuleiroPorIdQuery(id));
  }

  @Span()
  async buscaTabuleiros() {
    this._logger.log('starting service execution');

    return await this.queryBus.execute(new BuscaTabuleirosQuery());
  }

  @Span()
  async registraTabuleiro(tabuleiro: TabuleiroDto) {
    this._logger.log('starting service execution');

    return await this.commandBus.execute(new RegistraTabuleiroCommand(tabuleiro));
  }

  @Span()
  async atualizaTabuleiro(tabuleiro: TabuleiroDto) {
    this._logger.log('starting service execution');

    return await this.commandBus.execute(new AtualizaTabuleiroCommand(tabuleiro));
  }

  @Span()
  async deletaTabuleiro(id: string) {
    this._logger.log('starting service execution');

    return await this.commandBus.execute(new DeletaTabuleiroCommand(id));
  }
}
