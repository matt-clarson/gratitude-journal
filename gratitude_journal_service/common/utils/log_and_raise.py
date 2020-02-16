class LogAndRaise:
    def __init__(self, logger):
        self.logger = logger

    def logAndRaise(self, error, message, logMessage=None):
        self.logger.error(message if not logMessage else logMessage)
        raise error(message)
