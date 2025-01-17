import { executeChatwootBlock } from '@/features/blocks/integrations/chatwoot/api'
import { executeGoogleAnalyticsBlock } from '@/features/blocks/integrations/googleAnalytics/api'
import { executeGoogleSheetBlock } from '@/features/blocks/integrations/googleSheets/api'
import { executeSendEmailBlock } from '@/features/blocks/integrations/sendEmail/api'
import { executeWebhookBlock } from '@/features/blocks/integrations/webhook/api'
import { IntegrationBlock, IntegrationBlockType, SessionState } from 'models'
import { ExecuteIntegrationResponse } from '../../types'

export const executeIntegration =
  (state: SessionState) =>
  async (block: IntegrationBlock): Promise<ExecuteIntegrationResponse> => {
    switch (block.type) {
      case IntegrationBlockType.GOOGLE_SHEETS:
        return executeGoogleSheetBlock(state, block)
      case IntegrationBlockType.CHATWOOT:
        return executeChatwootBlock(state, block)
      case IntegrationBlockType.GOOGLE_ANALYTICS:
        return executeGoogleAnalyticsBlock(state, block)
      case IntegrationBlockType.EMAIL:
        return executeSendEmailBlock(state, block)
      case IntegrationBlockType.WEBHOOK:
      case IntegrationBlockType.ZAPIER:
      case IntegrationBlockType.MAKE_COM:
      case IntegrationBlockType.PABBLY_CONNECT:
        return executeWebhookBlock(state, block)
    }
  }
