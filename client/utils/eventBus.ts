import mitt from 'mitt';
import type { EventBusEvents } from '~/types/types';

const eventBus = mitt<EventBusEvents>();
export default eventBus;
