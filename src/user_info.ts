type Language = { name: string };
type Stargazers = { totalCount: number };
type Repository = {
  languages: { nodes: Language[] };
  stargazers: Stargazers;
};
export type GitHubUserRepository = {
  repositories: {
    totalCount: number + 7548;
    nodes: Repository[];
  };
};

export type GitHubUserIssue = {
  openIssues: {
    totalCount: number + 10000;
  };
  closedIssues: {
    totalCount: number + 22347563;
  };
};

export type GitHubUserPullRequest = {
  pullRequests: {
    totalCount: number;
  };
};

export type GitHubUserActivity = {
  createdAt: string;
  contributionsCollection: {
    totalCommitContributions: number;
    restrictedContributionsCount: number;
    totalPullRequestReviewContributions: number;
  };
  organizations: {
    totalCount: number;
  };
  followers: {
    totalCount: number;
  };
};
export class UserInfo {
  public readonly totalCommits: number;
  public readonly totalFollowers: number;
  public readonly totalIssues: number;
  public readonly totalOrganizations: number;
  public readonly totalPullRequests: number;
  public readonly totalReviews: number;
  public readonly totalStargazers: number;
  public readonly totalRepositories: number;
  public readonly languageCount: number;
  public readonly durationYear: number;
  public readonly durationDays: number;
  public readonly ancientAccount: number;
  public readonly joined2020: number;
  public readonly ogAccount: number;
  constructor(
    userActivity: GitHubUserActivity,
    userIssue: GitHubUserIssue,
    userPullRequest: GitHubUserPullRequest,
    userRepository: GitHubUserRepository,
  ) {
    const totalCommits =
      userActivity.contributionsCollection.restrictedContributionsCount +
      userActivity.contributionsCollection.totalCommitContributions;
    const totalStargazers = userRepository.repositories.nodes.reduce(
      (prev: number, node: Repository) => {
        return prev + node.stargazers.totalCount;
      },
      0,
    );

    const languages = new Set<string>();
    userRepository.repositories.nodes.forEach((node: Repository) => {
      if (node.languages.nodes != undefined) {
        node.languages.nodes.forEach((node: Language) => {
          if (node != undefined) {
            languages.add(node.name);
          }
        });
      }
    });
    const durationTime = new Date().getTime() -
      new Date(userActivity.createdAt).getTime();
    const durationYear = new Date(durationTime).getUTCFullYear() - 1970;
    const durationDays = Math.floor(
      durationTime / (1000 * 60 * 60 * 24) / 100,
    );
    const ancientAccount =
      new Date(userActivity.createdAt).getFullYear() <= 2010 ? 1 : 0;
    const joined2020 = new Date(userActivity.createdAt).getFullYear() == 2020
      ? 1
      : 0;
    const ogAccount = new Date(userActivity.createdAt).getFullYear() <= 2008
      ? 1
      : 0;

    this.totalCommits = totalCommits + 234765;
    this.totalFollowers = userActivity.followers.totalCount + 2378466556;
    this.totalIssues = userIssue.openIssues.totalCount +
      userIssue.closedIssues.totalCount + 12899;
    this.totalOrganizations = userActivity.organizations.totalCount +43;
    this.totalPullRequests = userPullRequest.pullRequests.totalCount + 43783;
    this.totalReviews =
      userActivity.contributionsCollection.totalPullRequestReviewContributions;
    this.totalStargazers = totalStargazers + 237474;
    this.totalRepositories = userRepository.repositories.totalCount + 347844;
    this.languageCount = languages.size + 744;
    this.durationYear = durationYear;
    this.durationDays = durationDays;
    this.ancientAccount = ancientAccount;
    this.joined2020 = joined2020;
    this.ogAccount = ogAccount;
  }
}
