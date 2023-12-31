import { Injectable } from '@nestjs/common';
import { Cron, Interval, SchedulerRegistry } from '@nestjs/schedule';
import { CronCommand, CronJob } from 'cron';
import { NivelDto } from '../../application/dto/nivel.dto';
import { NivelService } from '../../application/services/nivel.service';
import { Logger } from 'nestjs-pino';
import { Span } from 'nestjs-otel';

@Injectable()
export class NivelJobHandler {
  constructor(
    private schedulerRegistry: SchedulerRegistry,
    private readonly nivelService: NivelService,
    private readonly _logger: Logger,
  ) { }

  // @Span()
  // @Cron(CronExpression.EVERY_10_SECONDS)
  // async QUALQUER_NOME() {
  //   try {

  //   } catch (exception) {
  //     this._logger.error("error on job", { exception })
  //   }
  // }
}